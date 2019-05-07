var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        newFriend.routename = newFriend.name.replace(/\s+/g, "").toLowerCase();
        friendsData.push(newFriend)
        // Attempting to make an algorithm to run through all the friends, then run through all the differences of newFriend and friends[i], then return the lowest difference of all of them
        // I am having trouble getting this to work however
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = ((newFriend.scores[0] - friends[i].scores[0]) * -1) +
                ((newFriend.scores[1] - friends[i].scores[1]) * -1) +
                ((newFriend.scores[2] - friends[i].scores[2]) * -1) +
                ((newFriend.scores[3] - friends[i].scores[3]) * -1) +
                ((newFriend.scores[4] - friends[i].scores[4]) * -1) +
                ((newFriend.scores[5] - friends[i].scores[5]) * -1) +
                ((newFriend.scores[6] - friends[i].scores[6]) * -1) +
                ((newFriend.scores[7] - friends[i].scores[7]) * -1) +
                ((newFriend.scores[8] - friends[i].scores[8]) * -1) +
                ((newFriend.scores[9] - friends[i].scores[9]) * -1);
        };
        
        res.json(bestMatch)
    });
};