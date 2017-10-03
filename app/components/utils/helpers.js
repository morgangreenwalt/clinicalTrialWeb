var axios = require("axios");

var helpers = {

// Helper examples below 
// ==================================================================

  getAllFAQ: function() {
      return axios.get("/api/faq");
  },
  getAllData: function() {
        return axios.get("/data");
    },

  watchingData: function() {
      return axios.get("/watching", { watch: "true" });
  },

  resetData: function() {
        return axios.post("/reset");
    },

  postData: function(query) {
    return axios.post("/api", { query: query });
  },

  saveData: function(id) {
    return axios.post("/save", {id: id})
  },

  clearData: function() {
    return axios.post("/clear");
  },

  unsaveData: function(id) {
    return axios.post("/unsave", {id: id})
  },

  postNote: function(id, note) {
    return axios.post("/notes", {id: id, note: note})
  },

  deleteNote: function(id) {
    return axios.post("/delete/note", {id: id})
  }

};

module.exports = helpers;