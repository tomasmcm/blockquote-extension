/**
* Figure Extension.
* Uses image syntax to insert figure and figcaption tags
* Usage:
* ![Desciption][http://url]
*
*/
(function () {

  var figure = function (converter) {

    var fig = '<figure>' + '<img src="%1" alt="%2" title="%4">' + '<figcaption>%3</figcaption>' + '</figure>';
    var imgRegex = /(?:<p>)?<img.*?src="(.+?)".*?alt="(.*?)"(.*?)\/?>(?:<\/p>)?/gi;

    /**
    * Replace with figure tag
    */
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

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.figure = figure; }
  // Server-side export
  if (typeof module !== 'undefined') module.exports = figure;

}());
