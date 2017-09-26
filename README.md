# anchor-offset
Offset scroll position for page anchors. Useful for websites that have fixed content at the top of the page, such as a navigation bar.
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
