// DATA
// Creating an array to hold the survey data that is used to match friends; starting with dummy data
var friendArray = [
	{
		name: "Alex",
		photo: "https://venturebeat.com/wp-content/uploads/2017/02/amazon-echo-tap-1.jpg?fit=578%2C325&strip=all",
		scores: [
			"5",
			"5",
			"5",
			"1",
			"1",
			"3",
			"1",
			"2",
			"5",
			"3"
		]
	},
	{
		name: "Thanos",
		photo: "https://www.sideshowtoy.com/wp-content/uploads/2018/04/marvel-avengers-infinity-war-thanos-sixth-scale-figure-hot-toys-feature-903429-1.jpg",
		scores: [
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3",
			"3"
		]
	},
	{
		name: "Groot",
		photo: "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fewedit.files.wordpress.com%2F2016%2F10%2Fbaby-groot_0.jpg%3Fw%3D612&w=700&q=85",
		scores: [
			"1",
			"1",
			"1",
			"1",
			"1",
			"1",
			"1",
			"1",
			"1",
			"1"
		]
	},
	{
		name: "Jesus",
		photo: "https://i.kym-cdn.com/photos/images/facebook/000/662/285/da8.jpg",
		scores: [
			"3",
			"3",
			"5",
			"5",
			"3",
			"5",
			"5",
			"5",
			"3",
			"3"
		]
	}
];

//Exporting the array so that it is accessible to other files using require
module.exports = friendArray;