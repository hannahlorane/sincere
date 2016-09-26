app.factory('AuthorFactory', function ($http) {
  var author = {};
  author.getPersonalData = function (id) {
    return $http.get('/api/author/'+ id + '/data')
      .then(function (author) {
        return author.data;
      });
  };

  /* obviously to be generalized to a addStyle
     ostensibly this is going to be called with a string
     or file
     sends the string to the flask server, and then saves the
     result in postgres */
  author.addEmmaStyle = function (id) {
    console.log("add style called");
    return $http.get('/api/flask/emma/style')
    .then(function (styleResponse) {
      console.log("received style from flask");
      return styleResponse.data;
    })
    .then(function (style) {
      return $http.put('/api/author/' + id + '/style', style);
    })
    .then(function (updated) {
      console.log("put sucessful");
      return updated.data;
    })
    .catch(function (err) {
      console.log("put failed");
      throw(err);
    });
  };

  author.addGenesisLexicon = function (id) {
    console.log("add lexicon called");
    return $http.get('/api/flask/genesis/lexicon')
    .then(function (styleResponse) {
      console.log("received lexicon from flask");
      console.log("STYLERESPONSE", styleResponse.data);
      return styleResponse.data;
    })
    .then(function (lexicon) {
      console.log("LEXICON", lexicon);
      return $http.put('/api/author/' + id + '/lexicon', lexicon);
    })
    .then(function (updated) {
      console.log("put sucessful");
      console.log("UPDATED:", updated)
      return updated;
    })
    .catch(function (err) {
      console.log("put failed");
      throw(err);
    });
  };

  //gets an already saved style object from postgres
  author.getStyle = function (id) {
    return $http.get('/api/author/' + id + '/style')
    .then(function (style) {
      return style.data;
    });
  };

  //ditto lexicon
  author.getLexicon = function (id) {
    return $http.get('/api/author/' + id + '/lexicon')
    .then(function (lexicon) {
      return lexicon.data;
    });
  };

  return author;
});
