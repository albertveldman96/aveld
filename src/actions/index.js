import request from 'superagent';

export const getWeather = (city) => (
    dispatch =>
    {
        dispatch({type: 'GET_WEATHER_PENDING'});
        const cityEncoded = encodeURIComponent(city);
        request
            .get('/api/v1/weather/' + cityEncoded)
            .set("Accept", 'application/json')
            .end(function(err, data) {
                if (err)
                    dispatch({type: 'GET_WEATHER_FAILED', payload: err});
                else {
                    console.log(data.text);
                    const body = JSON.parse(data.text);

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
            });
    }
);
