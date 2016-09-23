var router = require('express').Router();
var Author = require('../../db/models/author.js');

router.get('/:id/data', function (req, res, next) {
  Author.findById(req.params.id, {
    attributes: ['name', 'biography']
  })
  .then(function (au) {
    res.send(au);
  })
  .catch(next);
});

module.exports = router;
