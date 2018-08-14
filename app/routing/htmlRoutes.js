// DEPENDENCIES
// Including the path package to get the correct file path for our html
var path = require("path");


/**********************************************/
// ROUTING
module.exports = function(app) {
	// Route that sends the user to the survey page
	app.get("/survey", function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// gets the home page
	app.get("/",function(req, res) {
	  res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};