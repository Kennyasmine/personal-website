import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
import { useState } from "react"


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div>
            <nav>
                <Link to='/' className="title"></Link>
                <div className="menu" onClick={() => {
                    console.log("Menu Clicked")
                    setMenuOpen(!menuOpen)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="Blog" className={({isActive}) => (isActive ? "active" : "")}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="Work" className={({isActive}) => (isActive ? "active" : "")}>Works</NavLink>
                    </li>
                    <li>
                        <NavLink to="Contact" className={({isActive}) => (isActive ? "active" : "")}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar