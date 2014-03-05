var fs = require('fs'),
    path = require('path'),
    htmlout = require('htmlout'),
    hljs = require('highlight.js');

function consoleHighlight(code, options) {
  options || (options = {});

  var theme = options.theme || 'default';
  var css = fs.readFileSync(path.join(__dirname, 'styles', theme + '.css'), 'utf8');

  var result = options.language ?
    hljs.highlight(options.language, code) :
    hljs.highlightAuto(code);

  var html = result.value;

  var output = htmlout.withCSS(css);

  return output('<pre class="hljs">' + html + '</pre>');
}

module.exports = consoleHighlight;
