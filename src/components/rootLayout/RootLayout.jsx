import { Outlet } from "react-router-dom";
import Header from '../header/Header'
import Footer from '../footer/Footer'

const RootLayout = ({windowWidth, handleButtonClick}) => {
  return (
    <>
    <Header windowWidth = {windowWidth} />
    
    <Outlet />

      <Footer handleButtonClick = {handleButtonClick} />
      
    </>
  )
}

export default RootLayout