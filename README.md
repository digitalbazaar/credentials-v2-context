# Verifiable Credentials Data Model 2.0 Context for JavaScript _(@digitalbazaar/credentials-v2-context)_

[![Build Status](https://img.shields.io/github/actions/workflow/status/digitalbazaar/credentials-v2-context/main.yaml)](https://github.com/digitalbazaar/credentials-v2-context/actions/workflow/main.yaml)
[![NPM Version](https://img.shields.io/npm/v/@digitalbazaar/credentials-v2-context.svg)](https://npm.im/@digitalbazaar/credentials-v2-context)

> A Verifiable Credentials Data Model 2.0 context library for JavaScript.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Status](#status)
- [Developing](#developing)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

See also (related specs):

* [Verifiable Credentials Data Model 2.0](https://w3c.github.io/vc-data-model)

## Install

- Requires Node.js 18+

To install via NPM:

```
npm install @digitalbazaar/credentials-v2-context
```

## Usage

```js
// ESM
import {
  CONTEXT,
  CONTEXT_URL,
  constants,
  context
} from '@digitalbazaar/credentials-v2-context';

// CommonJS
const ctx = require('@digitalbazaar/credentials-v2-context');
const {
  CONTEXT,
  CONTEXT_URL,
  constants,
  context
} = ctx;

// Default context URL
CONTEXT_URL
// -> 'https://www.w3.org/ns/credentials/v2'

// Default context data
CONTEXT
// -> full context object

// Codec term map value for CBOR-LD
constants.CBORLD_VALUE
// -> 0x0

// get context data for a specific context
const data = contexts.get('https://www.w3.org/ns/credentials/v2');
```

This package can be used with bundlers, such as [webpack][], in browser
applications.

## API

The library exports the following properties:
- `CONTEXT_URL`: Default context URL.
- `CONTEXT`: Default context data.
- `CBORLD_VALUE`: Default codec term map value for [CBOR-LD][].
- `constants`: A Object that maps constants to well-known context URLs. The
  main constant `CONTEXT_URL` may be updated from time to time to the
  latest context location.
- `contexts`: A `Map` that maps all context URLs to full context data.
- `appContextMap`: For use with the [cborld][] library.

## Status

- `https://www.w3.org/ns/credentials/v2`: Under development. Not stable.

## Developing

Source is available at:
- https://github.com/digitalbazaar/credentials-v2-context

**WARNING**: The `.jsonld` in `contexts/` is auto-generated by the `npm run build` script,
each time you run the test suite.

DO NOT edit it directly (or your changes will be quickly overwritten).
Instead, make all context changes to `js/context.js`.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

- BSD 3-Clause © Digital Bazaar
- See the [LICENSE](./LICENSE) file for details.

[CBOR-LD]: https://digitalbazaar.github.io/cbor-ld-spec/
[cborld]: https://github.com/digitalbazaar/cborld
[webpack]: https://webpack.js.org
