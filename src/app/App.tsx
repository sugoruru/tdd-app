import { Routes, Route } from "react-router-dom"
import { Home, Calendar, Diaries } from "./routes"
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

const NavBar = () => {
  {
    return (
      <nav>
        <button name="home">home</button>
        <button name="diaries">diaries</button>
        <button name="calendar">calendar</button>
      </nav>
    )
  }
}

function App() {
  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/diaries" element={<Diaries />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </>
  )
}

export default App
