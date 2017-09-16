var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var COLLECTION_GOES_HERESchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    link: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true
    },

    size: {
        type: Number,
        required: true
    },

    brand: {
        type: String,
        required: true
    },

    watch: {
        type: Boolean,
        required: true,
        default: false
    },

    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }]
});

var COLLECTION_GOES_HERE = mongoose.model("COLLECTION_GOES_HERE", COLLECTION_GOES_HERESchema);

module.exports = COLLECTION_GOES_HERE;