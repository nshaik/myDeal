var express		= require('express'),
	app 		= express(),
	items = require('./custom_modules/items');




app.use('/api/items', items);
app.use(express.static('app'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});