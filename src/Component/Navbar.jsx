import { NavLink } from "react-router";
import "../Style/Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <img src="/image.png" alt="Al Ahly Logo" />
                    <span>Al Ahly SC</span>
                </div>

                <ul className="nav-links">
                    <li>
                        <NavLink to="/" end>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">Trophies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/team">Team</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
