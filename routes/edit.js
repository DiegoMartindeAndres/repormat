var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('plantillas/eurocodigo', {title: "Titulo de prueba"});
});

router.get('/:PLANTILLA', function(req, res, next){
  var params = req.query;
  var print = false;
  if(params.hasOwnProperty('print')){
    print = params.print;
  }

  var plantilla = req.params.PLANTILLA;
  res.render('plantillas/' + plantilla, {
    plantilla: plantilla,
    print: print,
    params: params
  });
});
module.exports = router;
