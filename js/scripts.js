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
  });

  $("#serious").click(function() {
    $("#ruby").toggle();
    $("#general").hide();
    });


  $("#portable").click(function() {
    $("#java").toggle();
    $("#windows").hide();
  });


  $("#windows").click(function() {
    $("#c").toggle();
    $("#portable").hide();
  });

  // const love = parseInt(prompt("On a scale of 1-10, how much do you love lizards?"));
  //if (love < 8) {
   // $("#lame").show();
  //  }
  //  else if (love > 10) {
  //    $("#dragon").show(); 
  //  }
  //  else (love === 10) {
  //    $("#lizard").show();
  // }
  //});
});