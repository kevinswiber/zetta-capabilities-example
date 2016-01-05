var util = require('util');
var Device = require('zetta-device');
var capability= require('./capability');
var Switch = require('./switch_capability');

var LED = module.exports = function() {
  Device.call(this);
  capability.add(this, Switch);
};
util.inherits(LED, Device);

LED.prototype.init = function(config) {
  config
    .type('led')
    .state('off')
};

LED.prototype.turnOn = function(cb) {
  this.state = 'on';
  cb()
};

LED.prototype.turnOff = function(cb) {
  this.state = 'off';
  cb();
};
