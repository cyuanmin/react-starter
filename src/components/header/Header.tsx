import { Link } from "react-router-dom";
import * as React from "react";

export const Header: () => JSX.Element = (): JSX.Element =>
    (
        <header className="jumbotron">
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </header>
    );