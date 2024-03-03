import { Outlet } from "react-router-dom";
import Header from '../header/Header'
import Footer from '../footer/Footer'
import {useContext} from "react";
import {GlobalContext} from "../../../store/index.jsx";
import {AskForAQuote} from "../ask-for-a-quote/index.jsx";

const RootLayout = ({windowWidth, handleButtonClick}) => {
  const {state} = useContext(GlobalContext);
  // const [todos, dispatch] = useReducer(reducer, initialTodos);
  console.log("=>(RootLayout.jsx:12) data", state);
  return (
    <>
    <Header windowWidth = {windowWidth} />

    <Outlet />

      <Footer handleButtonClick = {handleButtonClick} />
      {state.askModalIsShown && <AskForAQuote />}

    </>
  )
}

export default RootLayout
