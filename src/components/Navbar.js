import '../styles/navBar.css';
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="header">
            <NavLink to="/about">A propos</NavLink>
        </div>
    );
}
