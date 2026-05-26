import { Routes, Route, Navigate } from 'react-router'
import { WeatherScreen } from './module/WeatherScreen'
import { DayDetailScreen } from './module/DayDetailScreen'

const App = () => {
  return (
    <Routes>
      <Route path="/weather" element={<WeatherScreen />} />
      <Route path="/weather/day/:date" element={<DayDetailScreen />} />
      <Route path="*" element={<Navigate to="/weather" replace />} />
    </Routes>
  )
}

export default App
