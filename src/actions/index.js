import request from 'superagent';

export const getWeather = (city) => (
    dispatch =>
    {
        dispatch({type: 'GET_WEATHER_PENDING'});
        const cityEncoded = encodeURIComponent(city);
        request
            .get('/api/v1/weather/' + cityEncoded)
            .set("Accept", 'application/json')
            .end((err, data) => {
                if (err)
                    dispatch({type: 'GET_WEATHER_FAILED', payload: err});
                else {
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

export const getWeights = () => (
    dispatch => {
        dispatch({type: 'GET_WEIGHTS_PENDING'});
        request
            .get('/api/v1/weights')
            .set('Accept', 'application/json')
            .end((err, data) => {
                if (err)
                    dispatch({type: 'GET_WEIGHTS_FAILED', payload: err});
                else {
                    const body = JSON.parse(data.text);
                    console.log(data.text);

                    let weights = [];
                    let dates = [];
                    for (let i = 0; i < body.length; i++) {
                        weights.push(body[i].weight);
                        dates.push(body[i].date.day);
                    }

                    dispatch({
                        type: 'GET_WEIGHTS_SUCCEEDED',
                        payload: { weights, dates }
                    })
                }
            });
    }
);
