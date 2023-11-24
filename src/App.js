import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"

const App = () => {
  return(
    <div className="App">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}


export default App