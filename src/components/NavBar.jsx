import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav className="nav-bar">
                <NavLink to="/" className={"nav-btn btn"}>
                    Home
                </NavLink>
                <NavLink to="/about" className={"nav-btn btn"}>
                    About
                </NavLink>
            </nav>
        </>
    )
}