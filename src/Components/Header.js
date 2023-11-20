import { LOGO_URL } from "../utils/Constants"
import Nav from "./Nav"

const Header = () => {
    return(
        <div className="Header">
         <div>
            <img src = {LOGO_URL} width = "150" height = "150"/>
         </div>
         <Nav/>
        </div>
    )
}

export default Header