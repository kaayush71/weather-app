import React, { useState } from "react";
import "./App.css";
import "weather-underground-icons/dist/wu-icons-style.css";

const api = {
  key: "d571c07a473ef3d000cb4f4018bd121a",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setQuery(" ");
          setWeather(result);
        });
    }
  };

  // const x =
  //   typeof weather.main != "undefined"
  //     ? weather.main.temp > 15
  //       ? "app warm"
  //       : "app
  //     : "app";

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter City ...!!"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="con">
            <div className="weather-box">
              <i className="wu wu-128 wu-white wu-day wu-cloudy"></i>

              <div className="temp">{Math.round(weather.main.temp)}°</div>
              <div className="weather">{weather.weather[0].description}</div>
            </div>
            <div className="location-box">
              <div className="location">
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
