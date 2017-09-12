# manifestation-vue

[![npm](https://img.shields.io/npm/v/manifestation-vue.svg) ![npm](https://img.shields.io/npm/dm/manifestation-vue.svg)](https://www.npmjs.com/package/manifestation-vue)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Vue component toolkit and Manifesto mixins for IIIF-aware user interfaces.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

# Installation

```
npm install --save manifestation-vue
```

## Default import

Install all the components:

```javascript
import Vue from 'vue'
import ManifestationVue from 'manifestation-vue'

Vue.use(ManifestationVue)
```

Use specific components:

```javascript
import Vue from 'vue'
import { Test } from 'manifestation-vue'

Vue.component('test', Test)
```

**⚠️ A css file is included when importing the package. You may have to setup your bundler to embed the css in your page.**

## Distribution import

Install all the components:

```javascript
import 'manifestation-vue/dist/manifestation-vue.css'
import ManifestationVue from 'manifestation-vue/dist/manifestation-vue.common'

Vue.use(ManifestationVue)
```

Use specific components:

```javascript
import 'manifestation-vue/dist/manifestation-vue.css'
import { Test } from 'manifestation-vue/dist/manifestation-vue.common'

Vue.component('test', Test)
```

**⚠️ You may have to setup your bundler to embed the css file in your page.**

## Browser

```html
<link rel="stylesheet" href="manifestation-vue/dist/manifestation-vue.css"/>

<script src="vue.js"></script>
<script src="manifestation-vue/dist/manifestation-vue.browser.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually with the instructions below.

Install all the components:

```javascript
Vue.use(ManifestationVue)
```

Use specific components:

```javascript
Vue.component('test', ManifestationVue.Test)
```

## Source import

Install all the components:

```javascript
import Vue from 'vue'
import ManifestationVue from 'manifestation-vue/src'

Vue.use(ManifestationVue)
```

Use specific components:

```javascript
import Vue from 'vue'
import { Test } from 'manifestation-vue/src'

Vue.component('test', Test)
```

**⚠️ You need to configure your bundler to compile `.vue` files.** More info [in the official documentation](https://vuejs.org/v2/guide/single-file-components.html).

# Usage

> TODO

# Example

> TODO

---

# Plugin Development

## Installation

The first time you create or clone your plugin, you need to install the default dependencies:

```
npm install
```

## Watch and compile

This will run webpack in watching mode and output the compiled files in the `dist` folder.

```
npm run dev
```

## Use it in another project

While developping, you can follow the install instructions of your plugin and link it into the project that uses it.

In the plugin folder:

```
npm link
```

In the other project folder:

```
npm link manifestation-vue
```

This will install it in the dependencies as a symlink, so that it gets any modifications made to the plugin.

## Publish to npm

You may have to login to npm before, with `npm adduser`. The plugin will be built in production mode before getting published on npm.

```
npm publish
```

## Manual build

This will build the plugin into the `dist` folder in production mode.

```
npm run build
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
