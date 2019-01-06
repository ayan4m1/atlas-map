# ATLAS Map

This project provides one half of a simple and flexible system for displaying a [slippy map](https://en.wikipedia.org/wiki/Tiled_web_map) of an [ATLAS](http://playatlas.com) server grid. Its companion project is [ATLAS Tile Server](https://github.com/ayan4m1/atlas-tile-server).

This project requires Node.js version 10 or greater.

## Usage

First, set up an ATLAS tile server. The rest of this document will assume that you have configured your tile server to be publicly accessible at `http://localhost:8080/map`.

Now, clone this repository and run:

```sh
npm install
```

This software is meant to be run in one of two modes - development or production. Development mode uses [webpack-dev-server](https://github.com/webpack/webpack-dev-server#webpack-dev-server) to spin up a live-reloading, source-mapped, unoptimized HTTP server that lives in a terminal window. Production mode uses [webpack](https://webpack.js.org/concepts/) to build a minified, optimized bundle of files which can be hosted by anything that a web browser can talk to.

In either mode, you **must** also run a tile server which is accessible to your users.

Choose development mode **if**:

* You want to test the software out without investing time in infrastructure
* You want to temporarily host a map for a small, private group of trusted users
* You want to have your browser automatically reload as you edit the source code of this project

Choose production mode **if**:

* You want to let the public access your map
* You want your map to be available all the time
* You want to minimize use of CPU or network resources
* You want to host the software on a static or shared web hosting service

### Development mode

Run:

```sh
npm start
```

This will start an instance of `webpack-dev-server` listening on `http://localhost:9000` and should open your browser to that URL after it is done setting things up. Any changes you make to source files while the server is running will trigger "hot module replacement," which you can read about [here](https://webpack.js.org/concepts/hot-module-replacement/#how-it-works).

### Production mode

Run:

```sh
npm run build
```

This will create a `dist/` folder which contains the static assets that make up the site. You are free to use whatever web server you want to host these. The configuration file `config/prod.js` is "baked in" to these assets. In an advanced setup, you would be leveraging caching, compression, TLS termination, load balancing and high availability features. Some of these things may not make sense for your use case - it's up to you to assess your requirements and determine the technologies that best meet those needs.

## Troubleshooting

If some aspect of your map is not behaving as you expect, the first thing you should do is press F12 or otherwise open your browser's developer tools. The JavaScript console and the network monitor are the two places that most errors will surface.

If your browser window is entirely white, there is likely a JS error in the console. Make sure all static resource requests are not returning error response codes like 403 or 500. Check the web server logs to see why it is not serving the resources.

If the map UI loads but there are no tile images, there is some disconnect between the tile server and your browser. Look at the network monitor for image requests with URLs like `.../0/0/0.webp`. If you are getting a connection reset or request timeout here then check the tile server URL in the config JS file appropriate for your run mode - it must match the port and address that your tile server is listening on. If you are getting 404, 403, 500, or similar, then look at the server response and the tile server logs to see why it is not serving the images up.

## Dependencies

This project uses the following libraries:

* [React](https://reactjs.org)
* [Leaflet](https://leafletjs.com)
* [React-Leaflet](https://react-leaflet.js.org/)

## Development Dependencies

This project uses the following tools:

* [Babel](https://babeljs.io/)
* [ESLint](https://eslint.org/)
* [Webpack](http://webpackjs.org)
* [stylelint](https://stylelint.io/)
* [node-sass](https://www.npmjs.com/package/node-sass)
* [Prettier](https://github.com/prettier/prettier#intro)
* [lint-staged](https://www.npmjs.com/package/lint-staged)
