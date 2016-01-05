# zetta-capabilities-example

An example demonstrating how to add capabilities to Zetta devices.

## Usage

Below is an example of using capabilities.  In the device constructor, simply include:

```js
capability.add(this, Capability)
```

Capabilities include a constructor and an `init` function.

In this example, the LED device uses the Switch capability.  Notice the `Switch` defines the state machine and maps to function names.  The `LED` actually implements those transition functions.

### `switch_capability.js`

```js
var Switch = module.exports = function() { }

Switch.prototype.init = function(config) {
  config
    .when('on', { allow: ['turn-off'] })
    .when('off', { allow: ['turn-on'] })
    .map('turn-on', this.turnOn)
    .map('turn-off', this.turnOff)
}
```

### `led.js`

```js
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
```

## License

MIT
