# anchor-offset
Offset scroll position for page anchors.

 [![npm version](https://badge.fury.io/js/anchor-offset.svg)](https://badge.fury.io/js/anchor-offset)
 [![Travis build status](http://img.shields.io/travis/ericvaladas/anchor-offset.svg)](https://travis-ci.org/ericvaladas/anchor-offset)
[![Coverage Status](https://coveralls.io/repos/github/ericvaladas/anchor-offset/badge.svg?branch=master)](https://coveralls.io/github/ericvaladas/anchor-offset?branch=master)
 [![Dependency Status](https://david-dm.org/ericvaladas/anchor-offset.svg)](https://david-dm.org/ericvaladas/anchor-offset)
 [![devDependency Status](https://david-dm.org/ericvaladas/anchor-offset/dev-status.svg)](https://david-dm.org/ericvaladas/anchor-offset?type=dev)

Useful for websites that have fixed content at the top of the page, such as a navigation bar.
## Usage

`anchorOffset(offset)`

`offset`: the amount to offset in pixels.



### Node
Install the package with npm.
```sh
npm install --save anchor-offset
```
Import the anchor-offset module.
```js
import anchorOffset from 'anchor-offset';

anchorOffset(50);
```

### Web
Get the latest [release](https://github.com/ericvaladas/anchor-offset/releases) and include it in your page.
```html
<script src="anchor-offset.js"></script>
<script>
  anchorOffset(50);
</script>
```
