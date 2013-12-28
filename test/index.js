var bind = require('../index.js');
var test = require('tape');
var element = require('domy-element');

var html = [
  '<div class="{{class-title}}">',
  '  <h2>{{title}}</h2>',
  '  <h3>{{subtitle}}</h3>',
  '  <p>{{description}}</p>',
  '</div>'
].join('\n');


test('interpolates object key/values in template', function (t) {
  var obj = {
    title: 'My Title'
  };
    
  var el = bind(html).to(obj);
  
  t.equal(element(el).one('h2').innerHTML, 'My Title');
  t.end();
});

test('updates dom element when value on object changes', function (t) {
  var obj = {title: 'My Title'};
  var el = bind(html).to(obj);
  
  document.body.appendChild(el);
  
  setTimeout(function () {
    obj.title = 'New Title';
    
    t.equal(element('h2').one().innerHTML, 'New Title');
    t.end();
  }, 0);
});