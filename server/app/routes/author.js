var router = require('express').Router();

router.get('/:id/data', function () {
  Author.findById({
    attributes: [name, biography]
  });
});

module.exports = router;
