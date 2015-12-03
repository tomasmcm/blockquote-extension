Showdown's Figure Extension
==========================

<!-- [![Build Status](https://travis-ci.org/tomasmcm/figure-extension.svg)](https://travis-ci.org/tomasmcm/figure-extension) [![npm version](https://badge.fury.io/js/showdown-figure.svg)](http://badge.fury.io/js/showdown-figure) [![npm version](https://badge.fury.io/bo/showdown-figure.svg)](http://badge.fury.io/bo/showdown-figure)

------ -->

**An extension to convert img tags to figure with figcaption in showdown documents using markdown syntax**

## Introduction

This extension converts every `<img>` tag into a `<figure>` with a `<figcaption>` inside.
The attribute `alt` is used to fill in the caption.
Instead of creating a new definition,
it borrows image syntax `![Description][url/img.jpg]` to create the correct figure tag: `<figure><img src="url/img.jpg" alt="Description" title="Description"><figcaption>Description</figcaption></figure>`

## Installation

<!-- ### With [npm](http://npmjs.org)

    npm install showdown-figure

### With [bower](http://bower.io/)

    bower install showdown-figure -->

### Manual

[Download the latest release zip or tarball](https://github.com/tomasmcm/figure-extension/releases) and include it in your webpage, after showdown:

    <script src="showdown.min.js">
    <script src="showdown-figure.min.js">

## Enabling the extension

After including the extension in your application, you just need to enable it in showdown.

    var converter = new showdown.Converter({extensions: ['figure']});

When using in node, ensure to first require the extension so it can register itself with showdown before any converters try to use it.

```javascript
var showdown = require('showdown');
var custom = require('./custom-extensions');
var converter = new showdown.Converter({ extensions: ['figure', custom] });

```

## Example

```javascript
var custom = require('./custom-extensions'),
    converter = new showdown.Converter({ extensions: ['figure', custom] }),
    input = '![Ship it Good!](http://www.cybersalt.org/images/funnypictures/s/supersquirrel.jpg)';
    html = converter.makeHtml(input);
console.log(html);
```

This should output the equivalent to:

```html
<figure><img src="http://www.cybersalt.org/images/funnypictures/s/supersquirrel.jpg" alt="Ship it Good!" title="Ship it Good!"><figcaption>Ship it Good!</figcaption></figure>
```


## License
These files are distributed under BSD license. For more information,
please check the [LICENSE file](https://github.com/tomasmcm/figure-extension/blob/master/LICENSE) in the source code.
