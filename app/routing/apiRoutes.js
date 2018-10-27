// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends Array
// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path") 
var friends = require("../data/friends.js");


// ROUTING
module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    //Total list of friend entries
    app.get("/api/friends", function (req, res) {
        console.log(friends);
        res.json(friends);
    });
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a survey... this data is then sent to the server...
    // Then the server saves the data to the friends array)
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function (req, res) {
        // Capture the user input object
        var newFriend = req.body;
        console.log(req.body);
    });

    app.post("/api/surveySubmit", function (req, res) {
        //friends.push(req.body);
        console.log(req.body);
        var newFriend = req.body;
        var friendsArray = [];

        var lowest = 9999;
        var index = 9999;
        //// Examine all existing friends in the list
        for (var i = 0; i < friends.length; i++) {
            var scoresDiff = 0;

            for (var j = 0; j < friends[i].scores.length; j++) {
                scoresDiff += (Math.abs((friends[i].scores[j]) - parseInt(newFriend.scores[j])));
            }
            if (scoresDiff < lowest){
                lowest=scoresDiff;
                index = i;
            }
            
        }
        console.log(friends[index]);
        res.json(friends[index]);
      
    });

}; 
