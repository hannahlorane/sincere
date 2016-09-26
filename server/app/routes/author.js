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

router.get('/:id/style', function (req, res, next) {
  Author.findById(req.params.id, {
    attributes: ['style']
  })
  .then(function (st) {
    res.json(st);
  })
  .catch(next);
});

router.get('/:id/lexicon', function (req, res, next) {
  Author.findById(req.params.id, {
    attributes: ['lexicon']
  })
  .then(function (st) {
    res.json(st);
  })
  .catch(next);
});

router.put('/:id/style', function (req, res, next) {
  console.log("$$$$$$$$$$$put called");
  Author.findById(req.params.id)
  .then(function (au) {
    console.log("author found")
    return au.update(req.body)
  })
  .then(function (result) {
    res.send(result);
  })
  .catch(next);
})

router.put('/:id/lexicon', function (req, res, next) {
  console.log("$$$$$$$$$$$put called");
  Author.findById(req.params.id)
  .then(function (au) {
    console.log("author found")
    return au.update({lexicon: req.body})
  })
  .then(function (result) {
    res.send(result);
  })
  .catch(next);
})

module.exports = router;
