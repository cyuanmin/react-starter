# Setting up package
-  npm init
-  npm install webpack --save-dev
-  npm install typescript ts-loader --save-dev
-  tsc --init
-  npm install debug --save
-  npm install tslint tslint-loader css-loader style-loader --save-dev 
-  npm install webpack-dev-server --save-dev
-  npm install babel-core babel-loader babel-preset-babili --save-dev 
-  tslint --init
-  Create a webpack.config.json file
-  Added the following scripts:
```
  "scripts": {
    "start": "./node_modules/.bin/webpack-dev-server --progress",
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
- Create index.ts
- npm run start