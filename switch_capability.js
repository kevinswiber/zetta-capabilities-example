var Switch = module.exports = function() { }

Switch.prototype.init = function(config) {
  config
    .when('on', { allow: ['turn-off'] })
    .when('off', { allow: ['turn-on'] })
    .map('turn-on', this.turnOn)
    .map('turn-off', this.turnOff)
}
