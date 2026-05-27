import { Routes, Route, Navigate } from 'react-router'
import { WeatherScreen } from './module/WeatherScreen'
import { DayDetailScreen } from './module/DayDetailScreen'
import { Layout } from './Layout'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/weather" element={<WeatherScreen />} />
        <Route path="/weather/day/:date" element={<DayDetailScreen />} />
        <Route path="*" element={<Navigate to="/weather" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
