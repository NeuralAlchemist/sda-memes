import { Link } from "react-router-dom";

import "../styles/Header.css";

export default function Header() {
    return (
        <div className="header-container">
            <Link to="/" className="logo">
                SDA MEMES
            </Link>
            <Link to="/about" className="home">
                About
            </Link>
        </div>
    );
}
