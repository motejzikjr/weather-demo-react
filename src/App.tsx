import { Routes, Route, Navigate } from 'react-router'
import { WeatherScreen } from './module/WeatherScreen'

export default function App() {
  return (
    <Routes>
      <Route path="/weather" element={<WeatherScreen />} />
      <Route path="*" element={<Navigate to="/weather" replace />} />
    </Routes>
  )
}
