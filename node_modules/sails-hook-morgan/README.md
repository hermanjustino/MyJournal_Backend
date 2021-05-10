# sails-hook-morgan

[Sails.js hook](https://next.sailsjs.com/documentation/concepts/extending-sails/hooks) for using [morgan](https://www.npmjs.com/package/morgan).

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url]

## Installation

```sh
$ npm install sails-hook-morgan --save
```

## Configuration

`config/morgan.js`

```javasctipt
module.exports.morgan = {
  "format": "common"
};
```

Consult [morgan documentation](https://www.npmjs.com/package/morgan#morganformat-options) for more `format` you can set, the default `format` is `"dev"`.

### Disable in Production Environment

`config/env/production.js`

```javascript
module.exports = {
  hooks: {
    morgan: false
  }
};
```

[npm-url]: https://www.npmjs.com/package/sails-hook-morgan
[npm-image]: https://img.shields.io/npm/v/sails-hook-morgan.svg

[travis-url]: https://travis-ci.org/upyun-dev/sails-hook-morgan
[travis-image]: https://img.shields.io/travis/upyun-dev/sails-hook-morgan/master.svg

[coveralls-url]: https://coveralls.io/github/upyun-dev/sails-hook-morgan?branch=master
[coveralls-image]: https://img.shields.io/coveralls/upyun-dev/sails-hook-morgan/master.svg
