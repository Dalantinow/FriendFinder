var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
require("./app/data/friends")



app.listen(PORT, function () {
    console.log("IM IN THE MAINFRAME " + PORT)
});
