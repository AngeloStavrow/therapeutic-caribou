function rankSentiment(text) {
  var sentiment = require('wink-sentiment');
  var result = sentiment(text);
  if (result.normalizedScore < 0) {
    return "That sounds unpleasant. Tell me more.";
  }
  else if (result.normalizedScore > 0) {
    return "Oh, that sounds nice! Tell me more.";
  }
  else {
    return "I see. What else is on your mind?";
  }
}

exports.analyzeWords = function(text) {
  var result = rankSentiment(text);
  return result;
}