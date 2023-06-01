import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'

//#region import pages
import Header from "./components/Header"

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
    </>
  )
}

export default App
