import { Route, Switch } from 'react-router-dom';
import * as React from "react";

export const PrimaryLayout: () => JSX.Element = (): JSX.Element => (
    <div className="container">
        <header className="jumbotron">
            React Router Demo
        </header>
        <main>        
            <Route path="/" exact component={HomePage} />
            <Route path="/user" component={UsersPage} />
        </main>
    </div>
);

const HomePage: () => JSX.Element = (): JSX.Element => <div>Home Page</div>;

const UsersPage: () => JSX.Element = (): JSX.Element => <div>Users Page</div>;