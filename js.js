//http://developer.nytimes.com/article_search_v2.json 

// # Back-End Team
// * Do preliminary research on the [API](http://developer.nytimes.com/article_search_v2.json).

// * Understand what format the URL should look like to make an Article Call. (Hint: Use the API Console!!)
// * Experiment with console logging various fields.
// Create the AJAX call needed to retrieve data then console.log all of the relevant fields.
// * Incorporate various "optional parameters" (hard code these in initially).
// * Take note of various "bugs" that appear with certain searches.
//* Put in a hard-effort to deal with bugs. How can you handle missing fields?
//## All-Together
//* Deploy your app to GitHub Pages!
//* Then slack your links to your instructors + TAs


var apiKey = "7743e049fd004ee1a7f2289b00f02b17"

// var url = "https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7743e049fd004ee1a7f2289b00f02b17&q=climate+change&begin_date=20180101&end_date=20180301";


$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    let topic = $("#search").val().trim();
    let numEntries = $("#inputGroupSelect04").val();
    let beginDate = $("#startYear").val().trim();
    let actualBeginDate = beginDate + "0101";
    let endDate = $("#endYear").val().trim();
    let actualEndDate = endDate + "1231";
    let url = "https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7743e049fd004ee1a7f2289b00f02b17&q=" + topic + "&begin_date=" + actualBeginDate + "&end_date=" + actualEndDate;



    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
        for (var i = 0; i < numEntries; i++) {
            let byline = result.response.docs[i].byline.original;
            let title = result.response.docs[i].headline.main;
            console.log(byline);
            $('.footer').append(`<div>${byline}</div>`);
            $('.footer').append(`<div>${title}</div>`);

        };

    }).fail(function (err) {
        throw err;
    });



});


$(".clearBtn").on("click", function (event) {
    $('.footer').clear();

});