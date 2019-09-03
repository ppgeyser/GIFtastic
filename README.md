# GIFtastic

This GIFtastic gif fetcher is my fourth project working with javascript/jquery for the UCSD Full Stack Web Developer Bootcamp. This project showcases my understanding of AJAX, APIs, and just for fun, bootstrap modals as well.

In this fully responsive app, there are some buttons with different emotions/reactions already populated. When a user click on any of these buttons, the app will use the Giphy API to fetch 10 gifs related to the emotion/reaction displayed on the button.

The parental ratings (G, PG, PG-13, etc) are also displayed above each gif. The gifs on default are still. When the user clicks on the gifs, this triggers an on-click function that animates the gifs. If the user clicks on the gifs a second time, they return to being still.

When the user clicks on another button, if there were any gifs displayed, they are cleared out and 10 new gifs related to the button will populate.

The user can create new buttons using the input form to the left of the viewport. After hitting the submit button, the input text field is cleared.

If the user attempts to enter a reaction/emotion that already has a button, a modal will appear alerting the user that there is already a button with that reaction/emotion. The attempted user input will then fail to populate in the list of buttons.

Additionally, an attempt to submit a blank input will trigger another modal that alerts the user that their input is invalid and that they need to enter an emotion/reaction. The attempted user input will again fail to populate in the list of buttons.

![iaMXSCh](https://user-images.githubusercontent.com/50184318/62402908-fc7a8b00-b53e-11e9-98b2-c970ec2c8e39.png)

![3APPUpH](https://user-images.githubusercontent.com/50184318/62402943-38155500-b53f-11e9-86d8-916539277d98.jpg)

![AldoPBi](https://user-images.githubusercontent.com/50184318/62402972-524f3300-b53f-11e9-9705-93f76db3d898.jpg)

![qDzERMV](https://user-images.githubusercontent.com/50184318/62403006-7e6ab400-b53f-11e9-96a4-7acf931d6a89.jpg)

![v1riyYn](https://user-images.githubusercontent.com/50184318/62403027-99d5bf00-b53f-11e9-97fd-fe6952703db3.jpg)

![lXpB3wS](https://user-images.githubusercontent.com/50184318/62403061-aeb25280-b53f-11e9-9a00-b22a22392572.jpg)
