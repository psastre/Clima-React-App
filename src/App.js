import React, {useEffect, useState} from "react"
import axios from "axios"
import './App.css';

function App() {

  const [weather,setWeather]= useState(null);
  const [input, setInput]= useState('');
  useEffect(()=>{
    axios.get('http://api.weatherapi.com/v1/current.json?key=e7f0fb73563347b6ac5184814211703&q=Buenos Aires&aqi=no')
    .then((data) => {
      setWeather(data.data);
     
     
   })
   .catch(err => console.log(err))
  },[]);
  const weatherInput =(e)=>{
    setInput(e.target.value);
  }
  const searchWeather =(e)=>{
    axios.get(`http://api.weatherapi.com/v1/current.json?key=e7f0fb73563347b6ac5184814211703&q=${input}&aqi=no`)
    .then((data) => {
      
      setWeather(data.data);
    });
  }
  return (
    <div>
      {weather && (
        <div className="search">
          <input onChange={weatherInput} type="text"/>
          <button onClick={searchWeather}>Buscar</button>
        <div>
        <h1>{weather.location.name}</h1>
        <h2>{weather.location.region}</h2>
        <h3>{weather.current.temp_c}`</h3>
        <h3>{weather.current.humidity} humedad</h3>
        <img src={weather.current.condition.icon} alt=""/>
        </div>
        </div>
      )}
      
    </div>
  );
}

export default App;
