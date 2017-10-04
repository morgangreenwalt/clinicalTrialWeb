// Including React & React DOM
import React from "react";
import {render} from "react-dom";
import Routes from "./config/routes";

// Renders the contents according to the route page.

render(<Routes />, document.getElementById("app"));

// $(document).on("click", "#searchInquiry", function() {
  // Grab the id associated with the article from the submit button
//   var thisId = $(this).respo("data-id");
//   var thisTitle = $(this).attr("data-title");
//   var thisLink = $(this).attr("data-link");

//   // Run a POST request to change the note, using what's entered in the inputs
//   $.ajax({
//     method: "POST",
//     url: "/saveArticles/" + thisId,
//     data: {
//       // Value taken from title input
//       title: thisTitle,
//       // Value taken from note textarea
//       link: thisLink,
//     }
//   })
//     // With that done
//     .done(function(data) {
//       // Log the response
//       console.log(data);
//       location.reload();
//     });
// });

// $(document).on("click", "#loginSubmit", function() {
//     redirect("/main");
// });