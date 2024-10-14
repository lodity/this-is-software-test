import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext/userContext'
import { ICurrentWeather } from '../types/weather'
import axios from 'axios'

export const useWeather = () => {
  const userContext = useContext(UserContext)
  const [weather, setWeather] = useState<ICurrentWeather | null>(null)
  const [weatherLoading, setWeatherLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchWeather = async () => {
      if (!userContext?.user) return
      try {
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast`,
          {
            params: {
              latitude: userContext.user.location.coordinates.latitude,
              longitude: userContext.user.location.coordinates.longitude,
              current_weather: true,
              daily: ['temperature_2m_max', 'temperature_2m_min'],
              timezone: 'auto',
            },
          },
        )

        const weatherData = response.data

        setWeather({
          current_temperature: weatherData.current_weather.temperature,
          daily_max: weatherData.daily.temperature_2m_max[0],
          daily_min: weatherData.daily.temperature_2m_min[0],
          weather_icon: weatherData.current_weather.weathercode,
        })
      } catch (error) {
        console.error(error)
      } finally {
        setWeatherLoading(false)
      }
    }

    fetchWeather()
  }, [userContext?.user])

  return { weather, weatherLoading }
}
