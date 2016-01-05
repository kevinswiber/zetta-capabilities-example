var zetta = require('zetta');
var LED = require('./led');

zetta()
  .use(LED)
  .listen(process.env.PORT || 3000);
