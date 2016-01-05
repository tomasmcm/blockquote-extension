/*! showdown-figure 04-12-2015 */
(function () {

  var figure = function (converter) {

    var fig = '<figure>' + '<img src="%1" alt="%2" title="%4">' + '<figcaption>%3</figcaption>' + '</figure>';
    var imgRegex = /(?:<p>)?<img.*?src="(.+?)".*?alt="(.*?)"(.*?)\/?>(?:<\/p>)?/gi;
    return [
      {
        type: 'output',
        filter: function (text, converter, options) {
          var tag = fig;

          return text.replace(imgRegex, function (match, url, alt, rest) {
            return tag.replace('%1', url).replace('%2', alt).replace('%3', alt).replace('%4', alt);
          });
        }
      }
    ];
  };
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.figure = figure; }
  if (typeof module !== 'undefined') module.exports = figure;

}());

//# sourceMappingURL=showdown-figure.js.map