import './style.css';
import { format, parseISO } from 'date-fns';
import { make, query } from 'jeff-query';

// Weatherapi key
const API_KEY = 'acb745e75bc74a35bd612350232312';

const conditionIcons = {
    Sunny: '#',
};

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
    const tempDisp = make('.temp-display', tempBar);
    tempDisp.textContent = degrees;
    const timeDisp = make('.time', card);
    timeDisp.textContent = time;
    const condIcon = make('img.condition-icon', card);
    condIcon.src = '#';
    condIcon.alt = condition;

    return card;
}

function displayHourlyData(data) {
    const sliderBoard = query('main .slider-board');
    for (let i = 0; i < 12; i += 1) {
        const newCard = createCard(69, '6 pm', 'Sunny');
        sliderBoard.append(newCard);
    }
}

loadData('North Charleston').then((data) => {
    console.log(data);
    displayHourlyData(data);
});
