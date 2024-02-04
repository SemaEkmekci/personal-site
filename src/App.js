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
<<<<<<< HEAD
          <Route path="/personal-site" element={<HomePage/>} />
=======
          <Route path="./" element={<HomePage isSidebar={isSidebar} setisSidebar={setisSidebar}/>} />
>>>>>>> 803a53c93eff4f0dbb33ebdfde6fd8cb467a8036
        </Routes>
      </div>
    </Router> 
    <Footer/>

    </>
  )
}

export default App
