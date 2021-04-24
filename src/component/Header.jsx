import {Link} from "react-router-dom";

import "../styles/Header.css"

export default function Header() {
    return (
        <div className="header-container">
            <header className="logo">SDA MEMES BY YASH</header>
            <div className="link-container">
                <Link to="/" className="home">
                    Home
                </Link>
                <Link to="/" className="home">
                    Home
                </Link>
            </div>
        </div>
    );
}
