import parser from './parser.js';

function HtmlToJson () {}

Plugin.registerCompiler({
  extensions: ['html'],
}, () => new HtmlToJsonCompiler());

export class HtmlToJsonCompiler {
  processFilesForTarget (files) {
    files.forEach(function (file) {
      let output = `module.exports = ${JSON.stringify(parser(file.getContentsAsString()))}`;
      file.addJavaScript({ data: output, path: file.getPathInPackage() + '.js' });
    });
  }
}
