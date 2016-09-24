var router = require('express').Router();
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

router.get('/emma/style', function(req, res) {
  proxy.web(req, res, {target: 'http://localhost:5000'});
});

router.get('/genesis/lexicon', function (req, res) {
  proxy.web(req, res, {target: 'http://localhost:5000'});
})

module.exports = router;
