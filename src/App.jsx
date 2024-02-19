import { useState, useEffect} from 'react'

import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import { register } from 'swiper/element/bundle';
import Aos from 'aos'
import 'aos/dist/aos.css'
register();

import RootLayout from './components/rootLayout/RootLayout'
import Home from './components/home/Home'
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy'
import TermsConditions from './components/termsConditions/TermsConditions'
import CookiePolicy from './components/cookiePolicy/CookiePolicy'
import RefundServicePolicy from './components/refundServicePolicy/RefundServicePolicy'




  
  function App() {
    
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {

    Aos.init({duration: 600 })
  
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
    window.removeEventListener('resize', handleResize);
  
  };
  }, [])
  
  const [activeServicesbtn, setActiveServicesbtn] = useState('development');
  
  const handleButtonClick = (name) => {
  setActiveServicesbtn(name);
  };



  return <RouterProvider router={
    createBrowserRouter(
      createRoutesFromElements(
            <Route path="/" element={<RootLayout windowWidth={windowWidth} handleButtonClick={handleButtonClick} />}>
              <Route index element={<Home windowWidth={windowWidth} handleButtonClick={handleButtonClick} activeServicesbtn={activeServicesbtn} />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="terms-conditions" element={<TermsConditions />} />
              <Route path="cookie-policy" element={<CookiePolicy />} />
              <Route path="refund-service-policy" element={<RefundServicePolicy />} />
            </Route>
      )
      )
  } />
}

export default App
