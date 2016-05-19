console.log("connected to app.js");

$("#get-started").on("click", function(){
  $("#main").fadeOut("slow", function(){
    console.log("get-started animation complete");
    $("#explore").fadeIn("slow");
  });
});
