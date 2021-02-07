$(document).ready(function(){

  $("#prompt2").hide();
  $("#prompt3").hide();
  $("#python").hide();
  $("#ruby").hide();
  $("#java").hide();
  $("#c").hide();
  //$("#lame").hide();
  //$("#dragon").hide();
  //$("#lizard").hide();
  
  $("#easier").click(function() { 
    $("#prompt1").hide();
    $("#prompt2").show();
    $("#prompt3").hide();
  }); 
  
  $("#challenge").click(function() { 
    $("#prompt1").hide();
    $("#prompt2").hide();
    $("#prompt3").show();
  }); 
  
  $("#general").click(function() {
    $("#python").toggle();
    $("#serious").hide();
    $("#rate").toggle();
    $("#general").hide();
    $("#prompt2").hide();
  });

  $("#serious").click(function() {
    $("#ruby").toggle();
    $("#general").hide();
    $("#rate").toggle();
    $("#prompt2").hide();
    });


  $("#portable").click(function() {
    $("#java").toggle();
    $("#windows").hide();
    $("#rate").toggle();
    $("#prompt3").hide();
  });


  $("#windows").click(function() {
    $("#c").toggle();
    $("#portable").hide();
    $("#rate").toggle();
    $("#prompt3").hide();
  });

});
