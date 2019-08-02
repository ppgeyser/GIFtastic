$(document).ready(function () {

    //topics variable that buttons function will populate from
    var topics = ["sad", "happy", "angry", "thanks", "excited"];

    //run createButton function
    createButton();

    //button-submit on click function
    $(".button-submit").on("click", function (event) {

            //stop page from refreshing
            event.preventDefault();

            //grab value from user input text field
            var userInput = $("#userReactionInput").val().trim();
            console.log(userInput);

            //push value into topics array
            topics.push(userInput);
            console.log(topics);

            //clear reaction-buttons div
            $("#reaction-buttons").empty();

            //run createButton function
            createButton();

            //clear text input field
            $("#userReactionInput").val("");

    })


//button-reaction on click function
$(document).on("click", ".button-reaction", function () {

    //clear reaction-gifs div
    $("#reaction-gifs").empty();

    //Grab data-reaction value from button
    var reaction = $(this).attr("data-reaction");

    //Create queryURL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + reaction + "&api_key=ChcveAwioHGwKApnWcFtJUfVHlcHyyj8&limit=10";

    //Run AJAX request with queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    //.then function
    .then(function(response) {
        console.log(queryURL);
        console.log(response);

        //store response in a var
        var results = response.data;

        //For loop through each result item
        for (var i = 0; i < results.length; i++) {

            //create new div
            var reactionDiv = $("<div>");

            //create new p tag for result's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            //create new img div
            var reactionImg = $("<img>");
            
            //necessary class: .gif
            reactionImg.addClass("col").addClass("gif");

            //set src to still image
            reactionImg.attr("src", results[i].images.fixed_height_still.url);

            //set still image url attr
            reactionImg.attr("data-still", results[i].images.fixed_height_still.url);

            //set animated image url attr
            reactionImg.attr("data-animated", results[i].images.fixed_height.url);

            //necessary attr: data-state | set data-state to still
            reactionImg.attr("data-state", "still");


            //append p and img tag to div
            reactionDiv.append(p).append(reactionImg);

            //append reactionDiv to reaction-gifs div
            $("#reaction-gifs").append(reactionDiv);
        }
    })

})


//.gif on click function
//grab data-state value and store in var
//if state === still
//change src to animated gif url
//change data-state to animate

//else
//change src to still gif url
//change data-state to still

//function to create buttons based on topics var
function createButton() {

    //for loop that iterates through topics var
    for (var i = 0; i < topics.length; i++) {

        //var that creates a new <button> html tag
        var button = $('<button>');

        //necessary classes: btn, btn-primary, button-reaction
        button.addClass("btn").addClass("btn-primary").addClass("button-reaction");

        //necessary attr: data-reaction + value
        button.attr("data-reaction", topics[i]);

        //add button text
        button.text(topics[i]);

        //append to #reaction-buttons div
        $("#reaction-buttons").append(button);

    }

}

})