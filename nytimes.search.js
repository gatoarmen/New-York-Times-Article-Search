//http://developer.nytimes.com/article_search_v2.json 

// # Back-End Team
// * Do preliminary research on the [API](http://developer.nytimes.com/article_search_v2.json).

// * Understand what format the URL should look like to make an Article Call. (Hint: Use the API Console!!)
// * Experiment with console logging various fields.
// Create the AJAX call needed to retrieve data then console.log all of the relevant fields.
// * Incorporate various “optional parameters” (hard code these in initially).
// * Take note of various “bugs” that appear with certain searches.
//* Put in a hard-effort to deal with bugs. How can you handle missing fields?
//## All-Together
//* Deploy your app to GitHub Pages!
//* Then slack your links to your instructors + TAs


var apiKey = "7743e049fd004ee1a7f2289b00f02b17"

var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=HillaryClinton&&api-key=7743e049fd004ee1a7f2289b00f02b17";

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

// function dynButtons(i) {
//   var answerButton = $("<button>");
//   // Adding a class to button
//   answerButton.addClass("btn btn-primary btn-sm");
//   answerButton.attr('id', 'answer-button' + i);
//   answerButton.attr('class', 'answer-button');

//   // Providing the initial button text
//   if (i == 3) {
//       answerButton.attr('class', 'correct-answer');
//       answerButton.html(triviaGame.correctAnswer);
//   } else {
//       answerButton.html(triviaGame.incorrectAnswer[i]);
//   }