var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        newFriend.routename = newFriend.name.replace(/\s+/g, "").toLowerCase();
        friendsData.push(newFriend)
    });
};