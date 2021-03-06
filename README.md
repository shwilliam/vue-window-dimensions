# Vue window dimensions

> Declaratively use window dimensions in Vuejs

[![Try it out on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ryl19r628q?fontsize=14)

`vue-window-dimensions` is a Vue component that exposes the width and height of your browser window.

Please note that there are other libraries that try to solve this same problem. These, however, use a different API and often expose the dimensions as a global variable that updates on window resize. If this is more to your liking, check out [`vue-window-size`](https://github.com/mya-ake/vue-window-size) or [`vue-screen-size`](https://github.com/promosis/vue-screen-size).

## Installation

Install the component from npm by running `npm i vue-window-dimensions` or `yarn add vue-window-dimensions`.

## Usage

Import, register and place the component in your Vue app.

```html
<template>
  <VueWindowDimensions>
    <template slot-scope="{ dimensions }">
      dimensions: {{ dimensions.width }}, {{ dimensions.height }}
    </template>
  </VueWindowDimensions>
</template>
```

```js
import VueWindowDimensions from 'vue-window-dimensions'

export default {
  components: {
    VueWindowDimensions,
  },
}
```

## Contributing

This project is open to and encourages contributions! Feel free to discuss any bug fixes/features in the [issues](https://github.com/shwilliam/vue-window-dimensions/issues). If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/vue-window-dimensions)
2. Create your feature branch (`git checkout -b new-feature-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-feature-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/vue-window-dimensions/pull/new/master)
