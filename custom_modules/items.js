var express 	= require('express'),
	router 		= express.Router(),
	connection 	= require('./my-db')();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.route('/')
	.get(function(req, res) {		
		connection.query('SELECT * FROM items', function(err, result) {
		  if (err) throw err;
		  res.send(result);
		  console.log(result.insertId);
		});
	})
	.post(function(req, res) {
		console.log(req);
		var data = {
				"item_code":01,
				"item_name":"ok",
				"manufacturer":"me",
				"unit":"peace",
				"in_price":12,
				"out_price":14
		};
		connection.query('INSERT INTO items SET ?', data, function(err, result) {
		  if (err) throw err;
		  res.send('Cool');
		  console.log(result.insertId);
		});
	});

module.exports = router;