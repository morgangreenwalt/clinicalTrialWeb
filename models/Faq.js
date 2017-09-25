// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create FAQ schema
var faqSchema = new Schema({
  // category is a required string
  "Company Q Originated with (WCT/PTR)": {
    type: String
  },
  "#" : {
    type: Number
  },
  "Date Question was asked": {
    type: String
  },
  "Protocol section / Category": {
    type: String
  },
  
  "Category": {
    type: String
  },
  "TEMPORARY\rCategory notes (to simpllify": {
    type: String
  },
  "Question": {
    type: String
  },
  "Clarification / Answer from Polynoma": {
    type: String
  },
  "Comments\r(enter: Date/Last Name/Comment)": {
    type: String
  }
});

// Create the Article model with the ArticleSchema
var Faq = mongoose.model("faq", faqSchema);

// Export the model
module.exports = Faq;
