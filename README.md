# 🌤 Weather App

A simple weather lookup application built while completing freeCodeCamp's JavaScript curriculum. Users select a city from a dropdown and the app fetches real-time weather data via an asynchronous API call, then renders the results in a clean glassmorphic interface.

## Features

- Select from 6 major cities (New York, Los Angeles, Chicago, Paris, Tokyo, London)
- Fetches real-time weather data from a public API
- Displays temperature, feels-like temperature, humidity, wind speed, and wind gust
- Weather condition icon pulled dynamically from the API response
- Graceful error handling for failed or invalid requests
- Smooth fade-in animation on data load

## Built With

- **HTML** — semantic page structure
- **CSS** — custom glassmorphic UI, gradients, and animations
- **JavaScript** — async/await, Fetch API, DOM manipulation, optional chaining

## How It Works

1. The user selects a city from the dropdown menu and clicks "Get Weather"
2. An asynchronous function sends a fetch request to a weather proxy API
3. The returned JSON data is parsed and validated for errors
4. If the request succeeds, the relevant weather stats are inserted into the DOM and the weather card animates into view
5. If the request fails or returns invalid data, the user is alerted and the display is hidden

## Concepts Practiced

- Asynchronous JavaScript (`async`/`await`)
- Fetch API and working with external data sources
- DOM manipulation and dynamic content rendering
- Optional chaining (`?.`) for safely accessing nested API data
- Defensive error handling for unreliable network requests
- Responsive, component-based CSS layout

## File Structure

```
weather-app/
├── index.html      # Page structure and markup
├── styles.css       # Styling, layout, and animations
├── script.js        # Fetch logic and DOM updates
└── README.md
```

## Running Locally

1. Clone this repository
   ```
   git clone https://github.com/yourusername/weather-app.git
   ```
2. Open `index.html` directly in your browser — no build steps or dependencies required

## Author

**Huy Tran**
UX Designer · Human Systems Engineering, Arizona State University
[Portfolio](#) · [LinkedIn](https://www.linkedin.com/in/huy-tran-5525801b0/)
