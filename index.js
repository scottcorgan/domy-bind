var element = require('domy-element');
var interpolate = require('interpolate');
var watchjs = require('watchjs');
var watch = watchjs.watch;
var unwatch = watchjs.unwatch;

var bindMethods = {
  to: function (data) {
    this.data = data;
    this.template = this.element.one().outerHTML;
    this.element = this.interpolate();
    this.watch();
    
    return this.element;
  },
  
  interpolate: function () {
    var results =  interpolate(this.template, this.data, {
      delimiter: "{{}}"
    });
    
    return element(results).one();
  },
  
  watch: function () {
    var self = this;
    
    watch(this.data, function () {
      var newElement = self.interpolate();
      
      if (self.element.parentNode) {
        self.element.parentNode.replaceChild(newElement, self.element);
      }
      
      self.element = newElement;
    });
  }
};

module.exports = function (html) {
  return element(html).wrap(bindMethods);
};