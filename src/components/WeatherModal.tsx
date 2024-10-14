import React, { useContext } from 'react'
import { ICurrentWeather } from '../types/weather'
import { UserContext } from '../context/UserContext/userContext'
import { getWeatherIcon } from '../utils/getWeatherIcon'

interface WeatherModalProps {
  weather: ICurrentWeather | null
  loading: boolean
}

const WeatherModal: React.FC<WeatherModalProps> = ({ weather, loading }) => {
  const context = useContext(UserContext)
  if (!weather) return null

  function onClose() {
    if (context) {
      const { setShowWeather } = context
      setShowWeather(false)
    }
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded shadow-lg'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h2 className='text-lg font-bold mb-4'>Weather Details</h2>
            <div className='flex items-center mb-4'>
              <div className='text-4xl mr-4'>
                {getWeatherIcon(weather.weather_icon)}
              </div>
              <div>
                <p>Current Temperature: {weather.current_temperature}°C</p>
                <p>High: {weather.daily_max}°C</p>
                <p>Low: {weather.daily_min}°C</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className='bg-red-500 text-white p-2 rounded'
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default WeatherModal
