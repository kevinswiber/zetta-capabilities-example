exports.add = function(device, capability) {
  var c = new capability();

  Object.keys(c).forEach(function(k) {
    device[k] = c[k];
  });

  var originalInit = device.__proto__.init;
  device.__proto__.init = function(config) {
    c.init.call(device, config);
    originalInit.call(device, config);
  };
};
