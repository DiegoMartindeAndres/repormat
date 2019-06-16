var express = require('express');
var router = express.Router();


router.post('/:PLANTILLA', function(req, res, next) {
  var params = req.body;
  var print = true;
  var plantilla = req.params.PLANTILLA;
  res.render('plantillas/' + plantilla, {
    plantilla: plantilla,
    print: print,
    params: params
  });
});

router.get('/:PLANTILLA', function(req, res, next) {
  var params = req.query;
  var print = true;
  var plantilla = req.params.PLANTILLA;
  res.render('plantillas/' + plantilla, {
    plantilla: plantilla,
    print: print,
    params: params
  });
});

module.exports = router;
