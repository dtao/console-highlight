# console-highlight

Get syntax highlighting in the console.

## Usage

```javascript
var highlight = require('console-highlight');

console.log(highlight('javascript to highlight', {
  // optional options
  language: 'javascript', // will auto-detect if omitted
  theme: 'default' // a highlight.js theme
}));
```

Example output (using the 'monokai' theme):

![Console output](http://i.imgur.com/1tDoa0x.png)

## How it works

This library uses [highlight.js](http://highlightjs.org/) to do the heavy lifting. It then takes the
resulting *HTML* and uses [htmlout](https://github.com/dtao/htmlout) to convert it to styled console
output.

## Does this already exist?

Not that I'm aware of. The closest things I could find were
[ansi-highlight](https://github.com/dominictarr/ansi-highlight) and
[cardinal](https://github.com/thlorenz/cardinal), both of which only support JavaScript and appear
to implement the lexing and highlighting logic all themselves (or using esprima, in cardinal's
case).

By leveraging highlight.js for the actual highlighting logic, this library gains quite a lot:
support for 71 languages and 44 styles. Even better, whatever improvements are made to highlight.js
in the future will automatically benefit the console-highlight library.

## Questions?

[Please!](https://github.com/dtao/console-highlight/issues)
