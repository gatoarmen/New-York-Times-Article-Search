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

var url = "https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7743e049fd004ee1a7f2289b00f02b17&q=climate+change&begin_date=20180101&end_date=20180301";
var url ="https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7743e049fd004ee1a7f2289b00f02b17&q=" + topic + "&begin_date" + beginDate + "&end_date=" +endDate";"
var apiKey = "7743e049fd004ee1a7f2289b00f02b17"

// for (var i = 0; i < numEntries; i++) {
//   var byline = result.response.docs[i].byline.original;
//   var title = result.response.docs[i].headline.main;
// }

$(".searchBtn").on("click", function (event) {
  event.preventDefault();
  // This line of code will grab the input from the textbox
  let topic = $("#btninput").val().trim();
  let numEntries = $("#btninput").val().trim();
  let beginDate = $("#btninput").val().trim();
  let actualBeginDate = begindate + "0101";
  let endDate = $("#btninput").val().trim();
  let actualEndDate = endDate + "1231";
  let url = "https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7743e049fd004ee1a7f2289b00f02b17&q=" + topic + "&begin_date" + actualBeginDate + "&end_date=" + actualEndDate";


    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
        console.log(result.response.docs)
        console.log(result.response.docs[0].byline.original)//prints the author
        console.log(result.response.docs[0].headline.main) //prints the title 
    }).fail(function (err) {
        throw err;
    });

  for (var i = 0; i < numEntries; i++) {
      let byline = result.response.docs[i].byline.original;
      let title = result.response.docs[i].headline.main;
      
      $('.footer').append(`<div>${byline}</div>`);
      $('.footer').append(`<div>${title}</div>`);

  };

});


function dynDivs(i) {
  var divs= $("<div>");
  // Adding a class to button
  divs.addClass("btn btn-primary btn-sm");
  divs.attr('id', 'answer-button' + i);
 divs.attr('class', 'answer-button');

 $(".footer").append(byline + title);

  // Providing the initial button text
  if (i == 3) {
      answerButton.attr('class', 'correct-answer');
      answerButton.html(triviaGame.correctAnswer);
  } else {
      answerButton.html(triviaGame.incorrectAnswer[i]);
  }