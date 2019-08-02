$(document).ready(function () {

    //topics variable that buttons function will populate from
        var topics = ["sad", "happy", "angry", "thanks", "excited"];

    //function to create buttons based on topics var
        //for loop that iterates through topics var
            //var that creates a new <button> html tag
            //necessary classes: btn, btn-primary, button-reaction
            //necessary attr: data-reaction + value
            //append to #reaction-buttons div

    //button-submit on click function
        //stop page from refreshing
        //grab value from user input text field
        //push value into topics array
        //clear text input field
        //run createButton function

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

})