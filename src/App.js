import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar.jsx'
import HomePage from './pages/HomePage.jsx'



const App = () => {
  return (
    <>
    <Sidebar/>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
    </Router> 
    </>
  )
}

export default App