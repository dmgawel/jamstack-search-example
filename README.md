# JAMstack Search Example

Example of search functionality for JAMstack sites using Hugo, pre-built Netlify Function (Lambda) and Lunrjs

## Build

```
npm run build
```

## Overview

1. During Hugo build a dump of all content is produced: [[1]](https://github.com/dmgawel/jamstack-search-example/blob/master/config.toml#L8) [[2]](https://github.com/dmgawel/jamstack-search-example/blob/master/layouts/_default/list.search.json)
2. This dump is later used to build a search index file using lunrjs [[3]](https://github.com/dmgawel/jamstack-search-example/blob/master/build-search.js)
3. Finally, search index is embodied into [Netlify Function](https://www.netlify.com/products/functions/) and deployed along the site [[4]](https://github.com/dmgawel/jamstack-search-example/blob/master/functions/search.js)
4. That's it, after your site is deployed you can query a Netlify Function: `https://wizardly-pasteur-c5fb53.netlify.com/.netlify/functions/search?q=one`

### TODO

[ ] Implement example front-end search functionality in theme
