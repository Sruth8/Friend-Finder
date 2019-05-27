var path = require("path");

module.exports = function (app) {
    
    //this passes in the peramiter express. When user hits the url it will go to survey.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

   //This is a rout for the home page
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

}


