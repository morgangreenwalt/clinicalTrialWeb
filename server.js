// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;


// requiring faq model
var Faq = require('./models/Faq.js');
//var Question = require('./models/question.js');

var Zendesk = require('zendesk-node-api');

var zendesk = new Zendesk({
 url: 'https://clintrial.zendesk.com', // https://example.zendesk.com 
 email: 'ryanglennarnett@gmail.com', // me@example.com 
 token: 'nv3iDcCAMTWVb4r58yGs9i6YK4gsjZuGLPBysrIX' // hfkUny3vgHCcV3UfuqMFZWDrLKms4z3W2f6ftjPT 
});


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// mLab Heroku Connection
mongoose.connect("mongodb://heroku_25j95brg:9ar0p68evjshju14bjfmniaibn@ds163294.mlab.com:63294/heroku_25j95brg");
var db = mongoose.connection;

// // Database configuration with mongoose (Local connection)
// mongoose.connect("mongodb://localhost/clinical_trial_db");
// // mongoose.connect("mongodb://localhost/newsScraping");

var db = mongoose.connection;

app.post("/api/faq/adminAdd/:adminQuestion/:adminAnswer/:adminCategory", function (req, res) {

    Faq.create({        
        "Company Q Originated with (WCT/PTR)": '',
        "#" : 1,
        "Date Question was asked": '',
        "Protocol section / Category": '',
        "Category": req.params.adminCategory,
        "TEMPORARY\rCategory notes (to simpllify": '',
        "Question": req.params.adminQuestion,
        "Clarification / Answer from Polynoma": req.params.adminAnswer,
        "Comments\r(enter: Date/Last Name/Comment)": ''
        }, function (err, newQuestion) {
        if (err) return handleError(err);
        // saved!
        console.log("hi there")
        res.send(newQuestion);
    });
    console.log("params",req.params);

});  

app.post("/api/faq/adminAdd/:adminQuestion/:adminAnswer/:adminCategory", function(req,res){
    var result ={};
    Result["Company Q Originated with (WCT/PTR)"] = '',
    Result["#"] = 1,
    Result["Date Question was asked"]= '',
    Result["Protocol section / Category"]= '',
    Result["Category"] = req.params.adminCategory,
    Result["TEMPORARY\rCategory notes (to simpllify"] = '',
    Result["Question"] = req.params.adminQuestion,
    Result["Clarification / Answer from Polynoma"] = req.params.adminAnswer,
    Result["Comments\r(enter: Date/Last Name/Comment)"] = ''

    var entry = new Faq(result);

    entry.save(function(err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          res.redirect("/");
        }
    });
})
    
// route to receive all faq's from db
app.get('/api/faq', function (req, res) {
    // console.log(Faq.find({}));
    Faq.find({}, function(error, doc){
        if (error) {
            console.log(error);
        }
        else {
            // console.log(doc);
            res.json(doc);
        }
    });

});


app.get('/api/zendesk/newTicket/:comment/:firstName/:lastName/:email', function (req, res) {

    zendesk.tickets.create({
        subject: 'test subject',
        external_id: req.params.email,
        comment: {
          body: 'QUESTION: '+req.params.comment+'\n\nNAME: '+req.params.firstName+
                ' '+req.params.lastName+'\nEMAIL: '+req.params.email
        }
      }).then(function(result){
        console.log(result);
        res.send(result);
      });
        
});

// Require in routes
// require("./controllers/routes.js")(app);

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  });


// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose & on port, log a success message
db.once("open", function() {
    console.log("Mongoose connection successful.");
});
app.listen(PORT, function() {
    console.log("App running on port"+PORT+"!");
});