var express = require('express');
var router = express.Router();
var config = require('../config/config.js');

var orion = require('fiware-orion-mintaka');
orion.configure(config.ORION);

/* GET listing. */
router.get('/', function(req, res, next) {
  orion.requestEntities().then(
          function(success){
            res.send(success);
          },
          function(error){
            res.send(error);
          }
  );
});

// query entity with attributes
router.get('/entity/:entity',function(req, res, next){
  var e = req.params.entity;
  orion.queryAttributes(e).then(
          function(success){
            res.send(success);
          },
          function(error){
            res.send(error);
          }
  );
});

router.get('/type/:type', function(req, res, next){
  var t = req.params.type;
  orion.queryEntitiesByType(t).then(
          function(success){
            res.send(success);
          },
          function(error){
            res.send(error);
          }
  );
});


router.get('/delete/:entity', function(req, res, next){
    var e = req.params.entity;
    //console.log('delete', e);
    orion.deleteEntity(e).then(
            function(success){
                res.send(success);
            },
            function(error){
                res.send(error);
            }
    );
});

module.exports = router;
