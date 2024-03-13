import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-danger navbar-dark">
                <div className="container-fluid">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/addplayer">Add Player</Link>
                        </li>
                        </ul>
                </div>
</nav>
    </div>
  )
}

export default NavBar
