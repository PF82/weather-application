## Weather App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project uses the Fetch API to retrieve the current weather data, and displays a responsive web design.

The Weather App first receives the user's chosen location, then queries the Open Weather Map for the current weather conditions at the user's desired location and subsequently displays the results.

## Highlight Features
- Easy navigation
- Basic design and user experience
- Responsive web design (for a variety of devices sizes)

- Fetch API
- 7 Given cities across the world
- Search for location bar and subsequent button
- Local weather button
- Metric °C and imperial °F units buttons
- Hourly, dayly and weekly weather forecast
- Background image matching the current weather conditions


## App Functionality Flow
1. User to type the location in and to press the enter button
2. OnKeyPress calls the API through getWeatherData function
3. If the API call is successful, the weather state is updated (with setWeather)
4. When the weather state changes, the useEffect hook is triggered by the dependencies that has from the weather state
5. When the useEffect runs again, the appropriate image is saved (conditionally using the if statements) in weatherImg state
6. As the states change, the component is 're-rendered' and the css gives a new image from the weatherImg state to the property

## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
