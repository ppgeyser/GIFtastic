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
//Grab data-reaction value from button
//Create queryURL
//Run AJAX request with queryURL
//.then function
//store response in a var
//For loop through each result item
//create new div
//create new p tag for result's rating
//create new img div
//create and store image tag for still image
//set src to still image
//creat and store image tag for animated image
//necessary attr: data-state
//set data-state to still
//necessary class: .gif

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