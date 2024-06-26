import { Link } from "react-router-dom";

import './header.css';

function Header() {
    return (
        <header>
            <div className="title">
                <h1>GOMYCODE</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;