app.factory('generate', function () {
  return function (style, lexicon, minlength) {

    /*given a dictionary/object that maps POS to normalized
     probabilities, selects a part of speech at random*/
    var nextPOS = function (probabilities) {
      var random = Math.random();
      var posprob = 0;
      for (var pos in probabilities) {
        posprob += probabilities[pos];
        if (posprob >= random) return pos;
      }
      return null;
    };

    var generateSentence = function () {
      var context = ['###', '##', '#'];
      var sentence = "";
      // console.log('Style:', style);
      var nextPOS = nextPOS(style[context[0]][context[1]][context[2]]);
      return nextPOS;
    }

    return generateSentence();
  };
});
