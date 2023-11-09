import React from "react"
import { Link } from "react-router-dom"
function Menu()
{

        return<>
         <ul className="nav navbar-nav">
           <li> <Link to="/"> Home</Link></li>
           <li> <Link to="/about"> About</Link></li>
           <li> <Link to="/login"> Login</Link></li>
           <li><Link to="/register"> Register</Link></li>
          </ul>
        </>
    
}
export default Menu