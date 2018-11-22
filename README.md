![AirMap: The Airspace Platform for Developers](examples/header.png)

# AirMap's Azure Maps Contextual Airspace Plugin

## Introduction

A control for [Azure Maps](https://azure.microsoft.com/en-us/services/azure-maps/) Azure Maps JS plugin to view
and interact with AirMap's Contextual Airspace Rules.

## Requirements

To use the AirMap Azure Maps Contextual Airspace Plugin, you must register as a developer and obtain an API key from the [AirMap Developer Portal](https://dashboard.airmap.io/developer).
Once your application has been created, simply copy the provided config JSON to provide to the Contextual Airspace Plugin.
You'll also need to register for a [Azure Maps Access Token](https://azure.microsoft.com/en-in/free/).

## Installation

### From AirMap's CDN

```html
<!-- Latest patch release -->
<script src="TBD"></script>

<!-- Latest minor release -->
<script src="TBD"></script>
```

### From [npm](https://npmjs.org)

```sh
npm install TBD
```

> After installing the `TBD` module via npm or bower, you'll need bundle it up along with its dependencies
using a tool like [webpack](https://webpack.github.io/) or [browserify](https://browserify.org). If you don't have a
build process in place for managing dependencies, it is recommended that you use the module via the CDN.
[See below](#with-webpack) for instructions on using with webpack and browserify. If you install with bower and intend
to support ES5, you will also need to run your bundle through [babel](https://babeljs.io/).

## Usage

Here's an example of a minimal setup. See [Documentation](#documentation) for more details.

```html
TBD
```

Or if using from NPM:

```javascript
TBD
```

### Prebuilt

If you are installing the Contextual Airspace Plugin with npm, a prebuilt package is also available in `dist/airmap.contextualairspaceplugin.min.js`. This will
allow you to use the Contextual Airspace Plugin without changing your webpack/browserify configuration. However, using your bundler to package
all dependencies is the preferred approach (webpack recommends against using prebuilt files).

## Documentation

> [Generated API Documentation](API.md)

> [Official AirMap Docs](https://developers.airmap.com/docs/js-getting-started)

### Developing

[Clone the repo](https://github.com/airmap/js-azure-maps-plugin) and run `npm install`. Then run `npm start` and navigate to
[http://localhost:8080/](http://localhost:8080/) in your browser. The server will
listen for changes and live reload as updates are made.

If this is your first time developing with the Contextual Airspace plugin, you'll need to store an AirMap API Key and Mapbox Access Token
in your localStorage for use on the `http://localhost:8080/` demo page:

```javascript
localStorage.setItem('AIRMAP_API_KEY', '<your_key>');
localStorage.setItem('AZURE_ACCESS_TOKEN', '<your_token>');
```

Once this is done, you won't need to do it again unless you clear your browser's localStorage.

```
$ npm install
$ npm start
$ open http://localhost:8080/
```

## License

> See [LICENSE](LICENSE.md) for details.

