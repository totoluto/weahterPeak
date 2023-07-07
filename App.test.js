import React, {useState} from 'react';
import { render, fireEvent} from '@testing-library/react-native';
import App from './App';
import {Platform} from "react-native";

it('check if data gets read and shown from sensor', async () => {
    const { getByText} = render(<App />);

    const sensorPressure = getByText(/^\d+(\.\d+)?\s*hPa$/)
    let sensorMeter = ''
    if(Platform.OS === 'ios'){
        sensorMeter = getByText(/^-?\d+(\.\d+)?\s*m$/)
    }
    expect(sensorPressure).toBeTruthy()
    expect(sensorMeter).toBeTruthy()

});

it('check if data transferred between scenes', async () => {
    const { getByText, queryByText} = render(<App />);

    const jungfrauButton = getByText('Jungfrau')

    fireEvent.press(jungfrauButton)

    const temperatureText = getByText('Temperature') //Check if we are on correct activity
    const jungfrauTitle = queryByText('Jungfrau') //Get title

    expect(temperatureText).toBeTruthy()
    expect(jungfrauTitle).toBeDefined()
});


it('check if correct data gets fetched', async () => {
    const { getByText, queryByText } = render(<App />);

    const jungfrauButton = getByText('Jungfrau')

    fireEvent.press(jungfrauButton)

    let data = 0
    await fetch('https://app-prod-ws.meteoswiss-app.ch/v1/stationOverview?station=JUN')
        .then(r => r.json())
        .then(d => data = d['JUN'])

    const pressureText = getByText(data.pressureStation + ' hPa')
    console.log(pressureText)
    expect(pressureText).toBeDefined()
});
