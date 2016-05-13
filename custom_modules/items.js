var express = require('express'),
    router = express.Router(),
    connection = require('./my-db')();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.route('/')
    .get(function(req, res) {
        connection.query('SELECT * FROM items', function(err, result) {
            if (err) throw err;
            res.send(result);
            console.log(result.insertId);
        });
    })
    .post(function(req, res) {
        connection.query('INSERT INTO items SET ?', req.body, function(err, result) {
            if (err) throw err;
            res.send(result);
        });
    });
router.route('/:id')
    .delete(function(req, res) {
    	var _id = req.params.id;
        connection.query('DELETE FROM items WHERE id='+_id, function(err, result) {
            if (err) throw err;
            res.send(result);
            console.log(result);
        });
    })
    /*.put(function(req, res) {
    	var _id = req.params.id;
        connection.query('UPDATE items SET item_name="new name" WHERE id='+_id, function(err, result) {
            if (err) throw err;
            res.send(result);
            console.log(result);
        });
    })*/;

module.exports = router;
