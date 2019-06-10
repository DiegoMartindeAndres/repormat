var express = require('express');
var router = express.Router();
const plantillasFolder = 'views/plantillas';
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir(plantillasFolder, (err, files) => {
    for(var i = 0; i< files.length; i++){
      files[i] = files[i].replace('.ejs','');
    }
    res.render('reportes',{
      title: 'REPORMAT',
      plantillas: files
    });
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
