import './style.css';
import { format, parseISO } from 'date-fns';
import { make, query } from 'jeff-query';
import createSlider from './slider';

require.context('./assets/weather/64x64/day', true, /\.png$/);

// Weatherapi key
const API_KEY = 'acb745e75bc74a35bd612350232312';

let weatherData = null;

async function loadData(city) {
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=3&aqi=no&alerts=no`,
            { mode: 'cors' }
        );
        const data = await response.json();
        const days = data.forecast.forecastday;

        const dailyData = [];
        for (let i = 0; i < days.length; i += 1) {
            const dayData = days[i];
            const { date } = dayData;
            const condition = dayData.day.condition.text;
            const avgTempF = dayData.day.avgtemp_f;
            const rainChance = dayData.day.daily_chance_of_rain;
            const snowChance = dayData.day.daily_chance_of_snow;

            const ogIconLink = dayData.day.condition.icon;
            const iconLink = ogIconLink.replace('//cdn.weatherapi.com', '.'); // I just put the sites' images in the dist folder manually so i dont have to hassle with importing the dozens of images somehow
            const hourlyData = [];
            for (let j = 0; j < dayData.hour.length; j += 1) {
                const hourDate = dayData.hour[j].time;
                const parsedDate = parseISO(hourDate);

                const ogHourIconLink = dayData.hour[j].condition.icon;
                const iconHourLink = ogHourIconLink.replace(
                    '//cdn.weatherapi.com',
                    '.'
                );

                const hourData = {
                    time: format(parsedDate, 'h:mm a'),
                    tempF: dayData.hour[j].temp_f,
                    condition: dayData.hour[j].condition.text,
                    iconLink: iconHourLink,
                };
                hourlyData.push(hourData);
            }

            dailyData.push({
                date,
                avgTempF,
                condition,
                rainChance,
                snowChance,
                hourlyData,
                iconLink,
            });
        }

        console.log(dailyData);

        return dailyData;
    } catch (err) {
        if (err.name === 'TypeError') {
            return null;
        }
        return err;
    }
}

function createCard(degrees, time, condition, barHeight, iconSrc) {
    const card = make('.card');
    const tempBar = make('.temp-bar', card);
    tempBar.style.height = `${barHeight}%`;

    const tempDisp = make('.temp-display', tempBar);
    tempDisp.textContent = `${degrees}°`;
    const timeDisp = make('.time', card);
    timeDisp.textContent = time;

    const condIcon = make('img.condition-icon', card);
    condIcon.src = iconSrc;
    condIcon.alt = condition;

    return card;
}

function makeHourSlider(cardCount, cardsPerSlide) {
    const nextButton = query('.carousel .right.arrow');
    const backButton = query('.carousel .left.arrow');
    const sliderElm = query('.carousel .slider-board');

    createSlider(
        nextButton,
        backButton,
        sliderElm,
        cardCount,
        cardsPerSlide,
        true
    );
}

function displayHourlyData(dayInd) {
    const sliderBoard = query('main .slider-board');
    sliderBoard.textContent = '';
    const day = weatherData[dayInd];

    const maxTemp = day.hourlyData.reduce(
        (max, nextVal) => (nextVal.tempF > max ? nextVal.tempF : max),
        0
    );
    for (let i = 0; i < day.hourlyData.length; i += 1) {
        const hour = day.hourlyData[i];
        const barHeight = (hour.tempF / maxTemp) * 100;
        const newCard = createCard(
            hour.tempF,
            hour.time,
            hour.condition,
            barHeight,
            hour.iconLink
        );
        console.log(hour.iconLink);
        sliderBoard.append(newCard);
    }
}

// Function to update the gradient based on a value
function updateGradient(value) {
    const color = interpolateColor(value);
    document.body.style.background = `linear-gradient(to bottom, ${color.start}, ${color.end})`;
}

// ---- COLOR CHANGING STUFF ---- //
// Function to interpolate color between orange and blue
const startHex = '#08415C'; // Blue
const barBlue = '#3993DD';

const endHex = '#D66853'; // Orange
const barOrg = '#F6AF65';
function interpolateColor(value) {
    const startColor = hexToRgb(startHex);
    const endColor = hexToRgb(endHex);

    const r = Math.round(
        startColor.r + (endColor.r - startColor.r) * (value / 100)
    );
    const g = Math.round(
        startColor.g + (endColor.g - startColor.g) * (value / 100)
    );
    const b = Math.round(
        startColor.b + (endColor.b - startColor.b) * (value / 100)
    );

    return {
        start: rgbToHex(startColor.r, startColor.g, startColor.b),
        end: rgbToHex(r, g, b),
    };
}

// Helper function to convert RGB to hex
function rgbToHex(r, g, b) {
    const toHex = (c) => `0${c.toString(16)}`.slice(-2);
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Helper function to convert hex to RGB
function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
    };
}

function loadDayData(dayInd) {
    const currDay = weatherData[dayInd];

    const iconElement = query('.todays-stats .condition-icon');
    const image = currDay.iconLink;
    iconElement.src = image;

    const tempDisplayElement = query('.todays-stats .temp-display');
    tempDisplayElement.textContent = `${currDay.avgTempF}°`;
    updateGradient(currDay.avgTempF);

    const conditionTextElement = query('.todays-stats .condition-text');
    conditionTextElement.textContent = `${currDay.condition}.`;

    const rainChancerElement = query('.todays-stats .rain-chancer');
    rainChancerElement.textContent = `${currDay.rainChance}%`;

    const snowChancerElement = query('.todays-stats .snow-chancer');
    snowChancerElement.textContent = `${currDay.snowChance}%`;

    displayHourlyData(dayInd);
}

let currDaySlide = 0;

function makeDaySlider() {
    const dayChangerElement = query('.day-changer');
    const sliderElement = query('.slider', dayChangerElement);
    const leftArrowElement = query('.left.arrow', dayChangerElement);
    const rightArrowElement = query('.right.arrow', dayChangerElement);

    const slider = createSlider(
        rightArrowElement,
        leftArrowElement,
        sliderElement,
        3,
        1,
        false
    );

    const changeDay = () => {
        const currSlide = slider.getCurrSlide();
        loadDayData(currSlide);
        currDaySlide = currSlide;
    };

    leftArrowElement.addEventListener('click', changeDay);
    rightArrowElement.addEventListener('click', changeDay);
}

function citySearchSetup() {
    const searcher = query('#search');
    const searchError = query('#search + .error');

    let lastSearch = 'Hell';
    searcher.value = 'Hell';
    searcher.addEventListener('keydown', async (event) => {
        try {
            if (event.key === 'Enter') {
                const oldData = weatherData;
                weatherData = await loadData(searcher.value);

                if (weatherData === null) {
                    weatherData = oldData;
                    searcher.value = lastSearch;
                    searcher.setCustomValidity('No such city!');
                    searchError.textContent = 'No such city!';
                } else {
                    searcher.setCustomValidity('');
                    searchError.textContent = '';
                    loadDayData(currDaySlide);
                    lastSearch = searcher.value;
                }
            }
        } catch (err) {
            console.error(err);
        }
    });
}

loadData('Hell')
    .then((data) => {
        weatherData = data;
        makeDaySlider();
        makeHourSlider(24, 12);
        citySearchSetup();

        loadDayData(0);
    })
    .catch((err) => console.error(err));
