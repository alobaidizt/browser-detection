jquery-browser-detection [![Build Status](https://travis-ci.org/schickling/jquery-browser-detection.png)](https://travis-ci.org/schickling/jquery-browser-detection)
========================

Lightweight plugin to get information about browser, version and OS.

## Installation
```
bower install jquery-browser-detection --save
```

## Usage

#### Get Data
```js
var data = $.browserDetection();

console.log(data.browser); // chrome
console.log(data.version); // 29
console.log(data.os); // osx
```

#### Add CSS classes to `html` tag

Javascript:
```js
var d = $.browserDetection(),
    classes = d.browser + ' ' + d.browser + '-' + d.version + ' ' + d.os;

$('html').addClass(classes);
```

CSS:
```css
html{
    background: white;
}

/* Internet Explorer 7 specific */
html.ie-7{
    background: red;
}

/* Only for OSX users with firefox */
html.osx.firefox{
    background: blue;
}
```

## Todo
* More tests for...
 * osx
 * win
 * linux
 * mobile
* Minification with grunt