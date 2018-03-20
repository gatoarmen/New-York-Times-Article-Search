//http://developer.nytimes.com/article_search_v2.json 

// # Back-End Team

// * Do preliminary research on the [API](http://developer.nytimes.com/article_search_v2.json).

// * Register for an API Key.

// * Understand what format the URL should look like to make an Article Call. (Hint: Use the API Console!!)

// * Experiment with console logging various fields.

var apiKey = "7743e049fd004ee1a7f2289b00f02b17"

var myUrl ="https://api.nytimes.com/svc/search/v2/articlesearch.json";
var data = "foo"; 

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);}
  .then(function(data){
    console.log(data);
$("content").text();
}).fail(function(err) {
    throw err;
});
