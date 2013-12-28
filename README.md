# domy-bind
 
Two-way data binding. For use with [Browserify](http://browserify.org).

Part of the [Domy module collection](https://github.com/scottcorgan/domy).

[![browser support](https://ci.testling.com/scottcorgan/domy-bind.png)](https://ci.testling.com/scottcorgan/domy-bind)
 
## Install
 
```
npm install domy-bind --save
```
 
## Usage
 
```js
var bind = require('domy-bind');

var html = [
  '<div>',
  '  <h2>{{title}}</h2>',
  '  <p>{{description}}</p>',
  '</div>'
].join('\n');

var data = {
  title: 'Title',
  description: 'Description'
};

var element = bind(html).to(data);

document.body.appendChild(element);

data.title = "New Title"; // Html/DOM will update when this is changed
```
 
## Run Tests

Requires [Phantomjs](phantomjs.org/download.html) is installed

```
npm install
npm test
```