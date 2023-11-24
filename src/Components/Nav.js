import { NavLink } from "react-router-dom"

const Nav = () => {
    return(
        <ul className="nav_items">
            <NavLink to = "/"><li className="nav_listItems">Home</li></NavLink>
             <NavLink to = "/about"><li className="nav_listItems">About</li></NavLink>
             <NavLink to = "/contact"><li className="nav_listItems">Contact</li></NavLink>
             <NavLink to = "/"> <li className="nav_listItems">Login</li></NavLink> 
       </ul>
    )
}
export default Nav