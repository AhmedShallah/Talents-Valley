import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const navLinkStyle = ({ isActive }) => {
        return {
            // color: isActive ? "#95B2FF" : "#000",
        };
    };

    return (
        <div className="navbar">
            <div className="logo">
                <img
                    src={process.env.PUBLIC_URL + "Image/talents-logo.png"}
                    alt=""
                />
                <h2>TALENTS VALLEY</h2>
            </div>
            <div className="link">
                <NavLink style={navLinkStyle} className="links" to="/">
                    Home
                </NavLink>
                <NavLink style={navLinkStyle} className="links" to="/signIn">
                    Invoices
                </NavLink>
                <NavLink style={navLinkStyle} className="links" to="/create">
                    Create
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
