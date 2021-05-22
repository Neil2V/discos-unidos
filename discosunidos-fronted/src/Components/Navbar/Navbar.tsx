import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <div className="container-fluid">
                <Link className="navbar-brand" to="/Discos">
                    <img src="discosUnidos.png" alt="" width={45} height={45} className="d-inline-block align-text-top" />
          Discos Unidos
        </Link>
            </div>
            <div className="container-fluid">
                
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/Discos">Comprar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Signup">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar