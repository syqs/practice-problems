
function titleCase(title, minorWords) {
if (minorWords === undefined) {
  var minorWords = '';
  } 
  var dcTitle = title.toLowerCase().split(" ");
  var words = [];
    
    dcTitle.forEach(function(word, index) {
      var newWord = word.charAt(0).toUpperCase();
      if (index === 0 || minorWords.toLowerCase().split(" ").indexOf(word) <= -1) {
        words.push(newWord + word.slice(1));
      } else {
        words.push(word);
      }
    }) 
    
    return words.join(" ");
};


