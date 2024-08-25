import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"
import { useState } from "react"


function Navbar() {

    // const menu = "https://t3.ftcdn.net/jpg/01/66/66/56/240_F_166665616_guHEOd6zztex1rqNXoVzW2tNxIclPJpw.jpg"
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
        if (!menuOpen) {
            document.body.classList.add("nav-open");
        } else {
            document.body.classList.remove("nav-open");
        }
    };
    return (
        <div>
            <nav>
                <Link to='/' className="title"></Link>
                <div className="menu" onClick={handleMenuClick}>
                    <span className={menuOpen ? "hide" : ""}></span>
                    <span className={menuOpen ? "hide" : ""}></span>
                    <span className={menuOpen ? "hide" : ""}></span>
                    <span className={menuOpen ? "menuClose" : "hide"}>X</span>
                    {/* <img src={menu} alt="menu" /> */}
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