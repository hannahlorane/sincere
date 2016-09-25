app.factory('generate', function () {
  return function (style, lexicon, minlength) {
    //this seems like something you should not be doing
    var style = style.style;

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

    // generates a sentence of parts of speech
    // after lexicate is implemented and applied, sentence will be a string
    var generateSentence = function () {
      var context = ['###', '##', '#'];
      var sentence = [];
      var pos = nextPOS(style[context[0]][context[1]][context[2]]);
      while (pos != '#') {
        console.log(pos);
        context.shift();
        context.push(pos);
        sentence.push(pos);
        pos = nextPOS(style[context[0]][context[1]][context[2]]);
      }
      return sentence;
    }

    /*takes in a part of speech and returns an item from
      the lexicon. This function will be called at the end
      of nextPOS now, but if/when I want to use smarter
      lexical item selection (eg markov chain on word to vec)
      I might want to send generated sentences of parts of speech
      back to the flask server for processing*/
    var lexicate = function (pos) {
      //TODO
    }

    return generateSentence();
  };
});
