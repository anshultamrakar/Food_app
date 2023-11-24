import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <ul className="nav_items">
            <Link to = "/"><li className="nav_listItems">Home</li></Link>
             <Link to = "/about"><li className="nav_listItems">About</li></Link>
             <Link to = "/contact">  <li className="nav_listItems">Contact</li></Link>
             <Link to = "/contact"> <li className="nav_listItems">Login</li></Link> 
       </ul>
    )
}
export default Nav