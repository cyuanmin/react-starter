# Setting up package
-  npm init
-  npm install webpack --save-dev
-  npm install typescript --save-dev
-  tsc --init
-  npm install css-loader style-loader --save-dev 
-  npm install webpack-dev-server --save-dev
-  tslint --init
-  Create a webpack.config.json file
-  Added the following scripts:
```
  "scripts": {
    "start": "./node_modules/.bin/webpack-dev-server",
    "build": "webpack"
  },
  ```

- Create a .gitignore file
```
/node_modules
/dist
```

# Creating basic app
- Create a src directory
- Create index.tsx under src
- Create index.html under root
- npm run start

# Adding React dependencies
- npm install --save react react-dom --save
- npm install  @types/react @types/react-dom --save-dev
- npm install --save-dev typescript awesome-typescript-loader source-map-loader
- Update webpack.config.js. It should look like [the following](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

# Adding TS Lint
- npm install tslint tslint-loader --save-dev
- Add lint check in webpack.config.js
```
{
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                exclude: /node_modules/,
                options: {
                    failOnHint: true,
                    configuration: require('./tslint.json')
                }
            },
```

# React simple demo
- First let's put together a simple component
```
import * as React from "react";
import {Compute} from "./Compute";

export interface HelloProps { compiler: string; framework: string; }
const compute: Compute = new Compute();
const sum: number = compute.Add(1, 2);
export const Hello: (props: HelloProps) => JSX.Element = 
(props: HelloProps): JSX.Element => <h1>Hello from {props.compiler} and {props.framework}! 1+2= {sum}</h1>;
```

- Now let's call ReactDom.Render() to draw UI on a DIV
```
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
```

- Last we will compose the index.html to use the React code
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Hello React!</title>
    </head>
    <body>
        <div id="example"></div>

        <!-- Dependencies -->
        <script src="./node_modules/react/umd/react.development.js"></script>
        <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>

        <!-- Main -->
        <script src="./dist/qtclient.bundle.js"></script>
    </body>
</html>
```

# React router v4 simple demo
- Make sure webpack.config.js has the following settings. Also publicPath in output is "/dist"
```
 devServer: {
    historyApiFallback: true,
  },
```
- Now let's put together a complete example. First define a layout in PrimaryLayout.tsx:
```
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
```
- Now let's define an app in App.tsx
```
import * as React from "react";
import { BrowserRouter as Router} from 'react-router-dom';
import { PrimaryLayout } from "./PrimaryLayout";

export const App: () => JSX.Element = (): JSX.Element =>
    (
        <Router>
            <PrimaryLayout />
        </Router>
    );
```
- Last, we will define it in index.tsx file:
```
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import { App } from "./components/App";

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById("example")
);
```
- The index.html stays the same:
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Hello React!</title>
    </head>
    <body>
        <div id="example"></div>

        <!-- Dependencies -->
        <script src="./node_modules/react/umd/react.development.js"></script>
        <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>

        <!-- Main -->
        <script src="./dist/qtclient.bundle.js"></script>
    </body>
</html>
```

# Add bootstrap styles
- npm install bootstrap --save
- npm install file-loader url-loader --save-dev
- In webpack.config.js, add the following:
```
    {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
    {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
```
- In index.tsx file, add the following:
```
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
```






