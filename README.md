# vue-tooltip-v

> Tooltip plugin for Vue.js

### TO Install
 
 ```bash
npm install vue-tooltip-v --save

```
in your main.js file import vue-tooltip-v as below

```bash
import vueTooltip from 'vue-tooltip-v';
```
then add the belowline

```bash
Vue.use(vueTooltip);
```

### Usage of plugin

add v-tooltip="message" in your html

```bash
<button v-tooltip="'this is a text'">Hover me</button>
```

### Development Setup

``` bash
# install deps
npm install

# serve demo at localhost:8080
npm run dev

# build library and demo
npm run build

# build library
npm run build:library

# build demo
npm run build:demo
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019 karthik
