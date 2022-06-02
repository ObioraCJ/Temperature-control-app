import React from "react";
import './Temp-ctrl-app.css'
import { useState } from "react";

const TemperatureControl = () => {
const [value, setValue] = useState(0)
const [temperatureColor, setTemperatureColor] = useState('cold')

const increase = () => {
    const newValue = value + 1; 
    if (newValue >= 20) {
        setTemperatureColor('hot')
    } else if (newValue > 10 && newValue < 20) {
        setTemperatureColor('cool')
    } else {
        setTemperatureColor('cold')
    }
    setValue(newValue)
}
const decrease = () => {
    const newValue = value - 1;
    if (newValue <= 10) {
        setTemperatureColor('cold')
    } else if (newValue > 10 && newValue < 20) {
        setTemperatureColor('cool')
    }    
    setValue(newValue)
}
    return (
        <>
        <div className='temp-container'>
       <h3>Temperature Control App</h3>
       <div className={`temp-degree ${temperatureColor}`}>
       <h1 className='h1-D'>{value}°c</h1>
       <button className='btn btn-temp' onClick={increase}>+</button>
       <button className='btn btn-temp' onClick={decrease}>-</button>
       </div>
       <p className='para'>DESIGNED BY JUSTICE</p>
        </div>
        </>
    )
}

export default TemperatureControl;
