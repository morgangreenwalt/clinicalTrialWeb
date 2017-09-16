var Boot = require("../models/boot.js");

// / // Our scraping tools
var request = require("request");
var cheerio = require("cheerio");

module.exports = function(app) {

// Route GET, POST, UPDATE, DELETE examples below 
// ===========================================================

// Route to scrape Ebay.com & save data to MongoDB
app.post("/scrape", function(req, res) {
    var gender = req.body.gender;
    var size = req.body.size;
    var brand = req.body.brand;
    var queryUrl;
    if (gender === "men") {
        queryUrl = "https://www.ebay.com/sch/i.html?_sacat=0&_nkw=mens+"+brand+"+"+size+"&_frs=1"
    } else if (gender === "women") {
        queryUrl = "https://www.ebay.com/sch/i.html?_sacat=0&_nkw=womens+"+brand+"+"+size+"&_frs=1"
    }

    request(queryUrl, function(error, response, html) {
        var $ = cheerio.load(html);
        var result = {};

        $("li.lvresult").each(function(i, element) {
            result.link = $(element).find("a").attr("href");
            result.title = $(element).find("h3").find("a").text().toLowerCase();
            result.image = $(element).find("img").attr("src");
            result.price = $(element).find("li").find("span").text();
            result.size = size;
            result.gender = gender;
            result.brand = brand;

            var newEntry = new Boot(result);

            newEntry.save(function(error, doc) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(doc);
                }
            });
        });
        console.log(result);
        res.redirect("/");
    });
});

// Route to get all boots data
app.get("/", function(req, res) {
    COLLECTION_GOES_HERE.find({}, function(err, data) {
    if (err) {
        throw err;
    } else {
        res.send(data);
    }
    });
});

// // Route to update a boot to "unwatched"
app.post("/unwatch/:id", function(req, res) {
    Boot.update({ _id: req.params.id }, { $set: { watch: false }}, function(err, data) {
    if (err) {
        throw err;
    } else {
        res.redirect("/");
    }
    });
});

// Route to reset filter & db collection
app.post("/reset", function(req, res) {
    Boot.remove(function(err, data){
        if(err){ 
            throw err;
        } else{
            console.log('No Of Documents deleted:');
            // res.redirect("/");
            res.send(data);
        }
    });
});

// // Route to view a specific boot JSON
app.get("/boots/:id", function(req, res) {
    Boot.findOne({_id: req.params.id}).populate("comments").exec(function(error, doc) {
        if (error) {
            res.send(error);
        }
        else {
            res.send(doc);
        }
    });
});

}