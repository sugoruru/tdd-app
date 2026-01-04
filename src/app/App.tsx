import { Routes, Route } from "react-router-dom"
import { Home, Calendar, Diaries } from "./routes"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/diaries" element={<Diaries />} />
    </Routes>
  )
}

export default App
