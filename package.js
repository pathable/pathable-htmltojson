Package.describe({
  name: 'pathable-htmltojson',
  version: '0.0.1',
  documentation: 'README.md',
});

Package.registerBuildPlugin({
  name: 'htmlToJson',
  use: ['ecmascript'],
  sources: [
    'plugin/html-to-json.js',
    'plugin/html-parser.js',
    'plugin/parser.js',
  ],
});


Package.onUse(function(api) {
  api.use('isobuild:compiler-plugin@1.0.0');
});
