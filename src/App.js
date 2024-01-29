/* eslint-disable no-unused-vars */
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar.jsx'
import Footer from './layout/footer/footer.jsx'
import HomePage from './pages/homePage/HomePage.jsx'



const App = () => {
  const [isSidebar, setisSidebar] = useState(false);

  return (
    <>
    <Sidebar isSidebar={isSidebar} setisSidebar={setisSidebar}/>
    <Router>
      <div>
        <Routes>
          <Route path="/personal-site" element={<HomePage/>} />
        </Routes>
      </div>
    </Router> 
    <Footer/>

    </>
  )
}

export default App