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

# Adding React code
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
