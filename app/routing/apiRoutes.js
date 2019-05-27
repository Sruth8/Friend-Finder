var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var match = {
            name: "",
            photo: "",
            friendDifference: 1000  //this is used to track the difference there answers
        };

        console.log(req.body);

        //the users data is parsed here
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        // the difference is calculated with the users scores and each user in the database
        var totalDifference = 0;

        console.log(friends[0].scores[0])
        console.log(friends[0].scores.length)

        
        //this nested "for loop" will loop through each of the  friends
        for (var f = 0; f < friends.length; f++) {
            console.log(friends[f]);
            totalDifference = 0;


            //this will loop through all the scores
            for (var s = 0; s < friends[f].scores.length; s++) {

                //this will calculat the scores and then sum them up in totalDifference. Math.abs means it returns absolute value which means
                // if it's negative it turns it postive and if it's postive it stays the same
                totalDifference += Math.abs(parseInt(userScores[s]) - parseInt(friends[f].scores[s])); 
                  
                //This will reset the match. Should reset to a new friend
                if (totalDifference <= match.friendDifference) {

                    
                    match.name = friends[f].name;
                    match.photo = friends[f].photo;
                    match.friendDifference = totalDifference;

                }

            }

        }
//this will push the user's datat in the userData. 
        friends.push(userData);
//this is be used in the html. this will return a JSON to the match
        res.json(match);


    });
}