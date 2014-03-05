var fs = require('fs'),
    path = require('path'),
    https = require('https'),
    URL = require('url');

function makeRequest(url, callback) {
  url = URL.parse(url);

  var options = {
    hostname: url.hostname,
    path: url.path,
    headers: {
      'User-Agent': 'dtao'
    }
  };

  https.get(options, function(res) {
    var buffer = '';

    res.on('data', function(data) {
      buffer += data;
    });

    res.on('end', function() {
      callback(buffer);
    });
  });
}

makeRequest('https://api.github.com/repos/isagalaev/highlight.js/contents/src/styles', function(items) {
  JSON.parse(items).forEach(function(item) {
    var name = item.name;

    if (!name.match(/\.css$/)) {
      return;
    }

    makeRequest(item.url, function(data) {
      var content = JSON.parse(data).content;
      var css = new Buffer(content, 'base64').toString('utf8');
      fs.writeFileSync(path.join('styles', name), css, 'utf8');
      console.log('Wrote ' + name);
    });
  });
});
