import './App.css';
import TopButtons from './components/top-buttons/TopButtons';
import Inputs from './components/inputs/Inputs';
import TimeAndLocation from './components/time-and-location/TimeAndLocation';
import TemperatureAndDetails from './components/temperature-and-details/TemperatureAndDetails';
import Forecast from './components/forecast/Forecast';
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from 'react';

import zero from '../src/img/world-map.jpg';
import one from '../src/img/thunderstorm.jpg';
import two from '../src/img/shower-rain.jpg';
import three from '../src/img/rain.jpg';
import four from '../src/img/snow.jpg';
import five from '../src/img/fog.jpg';
import six from '../src/img/clear-sky.jpg';
import seven from '../src/img/few-clouds.jpg';
import eight from '../src/img/scattered-clouds.jpg';
import nine from '../src/img/broken-clouds.jpg';

function App() {

  const [query, setQuery] = useState({ q: 'porto' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)
  const [weatherImg, setWeatherImg] = useState(zero);

  // fetching weather data following user's input
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  // background image to match current weather conditions
  useEffect(() => {
    if (weather?.id) {

      const id = weather?.id;

      if (id >= 200 && id <= 232) {
        setWeatherImg(one);
      } else if ((id >= 300 && id <= 321) || (id >= 520 && id <= 531)) {
        setWeatherImg(two);
      } else if (id >= 500 && id <= 504) {
        setWeatherImg(three);
      } else if ((id >= 600 && id <= 622) || (id === 511)) {
        setWeatherImg(four);
      } else if (id >= 701 && id <= 781) {
        setWeatherImg(five);
      } else if (id === 800) {
        setWeatherImg(six);
      } else if (id === 801) {
        setWeatherImg(seven);
      } else if (id === 802) {
        setWeatherImg(eight);
      } else {
        setWeatherImg(nine);
      }
    }
  }, [weather]);

  return (
    <div className='container-0'
      style={{
        backgroundImage: `url(${weatherImg})`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}>

      <div>
        <div className='container-1'>
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

          {weather && (
            <div>
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />

              <Forecast title="hourly forecast" items={weather.hourly} />
              <Forecast title="weekly forecast" items={weather.daily} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
