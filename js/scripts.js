$(document).ready(function() {
  $("#promptTwo").hide();
  $("#promptThree").hide();
  $("#python").hide();
  $("#ruby").hide();
  $("#java").hide();
  $("#c").hide();

  $("form#promptOne").submit(function(event) {
    event.preventDefault();
    
    let questionOne = $("select#questionOne").val();

    if (questionOne == 1) {
      $("#promptTwo").show();
      $("#promptOne").hide();
    } else if (questionOne == 2) {
      $("#promptThree").show();
      $("#promptOne").hide();
    }
  });

  $("form#questionTwo").submit









  // $("form#rate").submit(function(event) {
  //   let questionOne = $("input#questionOne").val();

  //   if (questionOne === "10" ) {
  //     alert("Hey thanks for stroking my ego, bud!");
  //   } else if (questionOne > 4 ) {
  //     $("#thanks").show();
  //   } else {
  //     $("#boo").show();
  //   }
  //   event.preventDefault();
  // });

  
  
//   $("#easier").click(function() { 
//     $("#prompt1").hide();
//     $("#prompt2").show();
//     $("#prompt3").hide();
//   }); 
  
//   $("#challenge").click(function() { 
//     $("#prompt1").hide();
//     $("#prompt2").hide();
//     $("#prompt3").show();
//   }); 
  
//   $("#general").click(function() {
//     $("#python").toggle();
//     $("#serious").hide();
//     $("#rate").toggle();
//     $("#general").hide();
//     $("#prompt2").hide();
//   });

//   $("#serious").click(function() {
//     $("#ruby").toggle();
//     $("#general").hide();
//     $("#rate").toggle();
//     $("#prompt2").hide();
//     });


//   $("#portable").click(function() {
//     $("#java").toggle();
//     $("#windows").hide();
//     $("#rate").toggle();
//     $("#prompt3").hide();
//   });


//   $("#windows").click(function() {
//     $("#c").toggle();
//     $("#portable").hide();
//     $("#rate").toggle();
//     $("#prompt3").hide();
//   });

});
