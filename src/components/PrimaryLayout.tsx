import { Route, Switch } from 'react-router-dom';
import * as React from "react";

export const PrimaryLayout: () => JSX.Element = (): JSX.Element => (
    <div className="primary-layout">
        <header>
            React Router Demo
        </header>
        <main>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/user" component={UsersPage} />
            </Switch>
        </main>
    </div>
);

const HomePage: () => JSX.Element = (): JSX.Element => <div>Home Page</div>;

const UsersPage: () => JSX.Element = (): JSX.Element => <div>Users Page</div>;