# FriendFinder

This web app is a compatibility-based application, similar to that of a dating app. The full-stack site takes in results from a user survey, in which a user answers specific compatibility questions, supplies a name and a link to a photo image, and is returned a "best match".

The best match is calculated from a sum of differences between the users answer weights (1-5) and the answers stored by each new "friend" already in stored by the application. The closest match will pop up on the screen with a photo. 

There are validations in place to make sure that the user enters a valid name, URL, and answers each question by selecting an option 1-5.

This application uses jquery, bootstrap css and js libraries, HTML, CSS for styling, Express, path, and body-parser packages, and is deployed to Heroku.

-Rob Herd, GT Coding BootCamp 2018