premier cours angularJS

avec Thomas Moyse

10/05/2017


commande de configuration initiale :

//configuration initiale

//1. Creation du fichier package.json
// contient les dependances
npm init -y


// installe toute les dependences menquantes
npm i


// 2. installation de angular
npm i angular -S


// 3. installation de webpack + webpack dev server
npm i  webpack webpack-dev-server -D


// 4. installation de babel
npm i babel-core babel-loader babel-preset-env -D


// 5. Configuration de webpack : webpack.config.js
```js
const path = require('path');

module.exports = {
    entry: "./app",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9090,
    },

	devtool: "cheap-module-eval-source-map",

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: [['env', {
                        modules: false,
                        targets: { browsers: ["last 2 versions"] }
                    }]]
                }
            }
        ]
    }

}
```

// 6. Modifier package.json
```json
...
    "dev:server": "webpack-dev-server --open",
...
```

// 7. Créer fichier dist/index.html
```html
...
<script src="bundle.js"></script>
...
```

// 8. Lancer le server
```npm run dev:server```
