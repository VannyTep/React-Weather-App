import React, { useEffect, useState } from "react";
import { getData } from "./js/getData";
import "./styles/App.css";

function App() {
  const [data, setData] = useState(null);
  const [cityInput, setCityInput] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedCity(cityInput);
  };

  useEffect(() => {
    if (submittedCity) {
      getData(cityInput)
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    }
  }, [submittedCity]);

  return (
    <>
      <form onSubmit={handleSubmit} id="city_form">
        <div className="input_container">
          <input
            type="text"
            id="city_input"
            placeholder="Enter your city"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
          <input type="submit" value={"Submit"} />
        </div>
        <div className="weather_data">
          {data && (
            <div>
              <h2>Weather Data</h2>
              <p>City: {data.name}</p>
              <p>Temperature: {data.main.temp}</p>
              <p>Weather: {data.weather[0].main}</p>
            </div>
          )}
        </div>
      </form>
    </>
  )
 
  // return (
  //   <>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         id="city"
  //         value={cityInput}
  //         onChange={(e) => setCityInput(e.target.value)}
  //       />
  //       <input type="submit" value={"Submit"} />
  //     </form>
  //     <div>
  //       {data && (
  //         <div>
  //           <h2>Weather Data</h2>
  //           <p>City: {data.name}</p>
  //           <p>Temperature: {data.main.temp}</p>
  //           <p>Weather: {data.weather[0].main}</p>
  //         </div>
  //       )}
  //     </div>
  //   </>
  // );
}

export default App;
