import { Route, Switch } from 'react-router-dom';
import * as React from "react";
import {HomePage} from "../components/home/HomePage";
import {AboutPage} from "../components/about/AboutPage";

export const PrimaryLayout: () => JSX.Element = (): JSX.Element => (
    <div className="container">
        <header className="jumbotron">
            React Router Demo
        </header>
        <main>        
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </main>
    </div>
);