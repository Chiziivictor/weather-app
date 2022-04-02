import { useState } from "react";
import axios from "axios";
import { api } from "./data";

import getForecast from "./getForecast";

const base = "http://dataservice.accuweather.com";

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getLocation = async (location) => {
    const params = {
      apikey: api.key,
      q: location,
    };

    const { data } = await axios(`${base}/locations/v1/cities/search`, {
      params,
    });

    if (!data || data.length === 0) {
      setError(true);
      setLoading(false);
      return;
    }

    return data[0];
  };

  const getForecastData = async (Key) => {
    const { data } = await axios(`${base}/forecasts/v1/daily/5day/${Key}`, {
      params: { apikey: api.key },
    });

    if (!data || data.length === 0) {
      setError(true);
      setLoading(false);
      return;
    }
    return data;
  };

  const forecastData = (data) => {
    const weatherForecast = getForecast(data.DailyForecasts);

    setForecast({ weatherForecast });
    setLoading(false);
  };

  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);

    const response = await getLocation(location);
    if (!response?.Key) return;

    const data = await getForecastData(response.Key);
    if (!data) return;

    forecastData(data);
  };

  console.log(forecast);
  return {
    isError,
    isLoading,
    forecast,
    submitRequest,
  };
};

export default useForecast;
