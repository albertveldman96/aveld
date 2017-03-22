import xhr from 'xhr';

const urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const urlSuffix = '&APPID=990bc587960e67fbd43cb5660a88ac3d&units=metric';
export const getWeather = (city) => (
    dispatch =>
    {
        dispatch({type: 'GET_WEATHER_PENDING'});
        const cityEncoded = encodeURIComponent(city);
        const url = urlPrefix + cityEncoded + urlSuffix;
        xhr({
            url: url
        }, (err, data) => {
            if (err)
                dispatch({type: 'GET_WEATHER_FAILED', payload: err});
            else {
                const body = JSON.parse(data.body);
                const list = body.list;
                let dates = [];
                let temps = [];
                for (let i = 0; i < list.length; i++) {
                    dates.push(list[i].dt_txt);
                    temps.push(list[i].main.temp);
                }
                dispatch({
                    type: 'GET_WEATHER_SUCCEEDED',
                    payload: { dates, temps }
                });
            }

        })
    }
);