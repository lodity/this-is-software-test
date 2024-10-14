export const getWeatherIcon = (weatherCode: number): string => {
  switch (weatherCode) {
    case 0:
      return '☀️' // Sunny
    case 1:
      return '🌤️' // Partly Cloudy
    case 2:
      return '⛅' // Cloudy
    case 3:
      return '☁️' // Overcast
    default:
      return '❓' // Unknown
  }
}
