import './style.css';
import { format, parseISO } from 'date-fns';
import { make, query } from 'jeff-query';
import createSlider from './slider';

// Weatherapi key
const API_KEY = 'acb745e75bc74a35bd612350232312';

const conditionIcons = {
    Sunny: '#',
};

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

            const hourlyData = [];
            for (let j = 0; j < dayData.hour.length; j += 1) {
                const hourDate = dayData.hour[j].time;
                const parsedDate = parseISO(hourDate);

                const hourData = {
                    time: format(parsedDate, 'h:mm a'),
                    tempF: dayData.hour[j].temp_f,
                    condition: dayData.hour[j].condition.text,
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
            });
        }

        return dailyData;
    } catch (err) {
        console.error(err);
        return err;
    }
}

function createCard(degrees, time, condition) {
    const card = make('.card');
    const tempBar = make('.temp-bar', card);
    tempBar.style.height = `${degrees}%`;

    const tempDisp = make('.temp-display', tempBar);
    tempDisp.textContent = `${degrees}°`;
    const timeDisp = make('.time', card);
    timeDisp.textContent = time;

    const condIcon = make('img.condition-icon', card);
    condIcon.src = '#';
    condIcon.alt = condition;

    return card;
}

function makeHourSlider(cardCount, cardsPerSlide) {
    const nextButton = query('.carousel .right.arrow');
    const backButton = query('.carousel .left.arrow');
    const sliderElm = query('.carousel .slider-board');
    console.log({
        nextButton,
        backButton,
        sliderElm,
        cardCount,
        cardsPerSlide,
    });
    createSlider(
        nextButton,
        backButton,
        sliderElm,
        cardCount,
        cardsPerSlide,
        true
    );
}

function displayHourlyData(data, dayInd) {
    const sliderBoard = query('main .slider-board');
    sliderBoard.textContent = '';
    const day = weatherData[dayInd];
    for (let i = 0; i < day.hourlyData.length; i += 1) {
        const hour = day.hourlyData[i];
        const newCard = createCard(hour.tempF, hour.time, hour.condition);
        sliderBoard.append(newCard);
    }
}

function loadDayData(dayInd) {
    const currDay = weatherData[dayInd];

    const iconElement = query('.todays-stats .condition-icon');
    iconElement.alt = 'NO ICON YET';

    const tempDisplayElement = query('.todays-stats .temp-display');
    tempDisplayElement.textContent = `${currDay.avgTempF}°`;

    const conditionTextElement = query('.todays-stats .condition-text');
    conditionTextElement.textContent = currDay.condition;

    const rainChancerElement = query('.todays-stats .rain-chancer');
    rainChancerElement.textContent = `${currDay.rainChance}%`;

    const snowChancerElement = query('.todays-stats .snow-chancer');
    snowChancerElement.textContent = `${currDay.snowChance}%`;

    displayHourlyData(weatherData, dayInd);
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

    searcher.addEventListener('keydown', async (event) => {
        try {
            if (event.key === 'Enter') {
                weatherData = await loadData(searcher.value);
                loadDayData(currDaySlide);
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
