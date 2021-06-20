$(document).ready(function() {
  $("#promptTwo").hide();
  $("#promptThree").hide();
  $("#promptFour").hide(); 
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
      $("#promptTwo").hide();
    }
  }); 

  $("form#promptTwo").submit(function(event) {
    event.preventDefault();

    let questionTwo = $("select#questionTwo").val();

    if (questionTwo === 1 || 2) {
      $("#promptFour").show();
      $("#promptOne").hide();
      $("#promptTwo").hide();
      $("#promptThree").hide();
    }
  }); 

  $("form#promptThree").submit(function(event) {
    event.preventDefault();

    let questionThree = $("select#questionThree").val();

    if (questionThree === 1 || 2 ) {
      $("#promptFour").show();
      $("#promptOne").hide();
      $("#promptTwo").hide();
      $("#promptThree").hide();
    }
  });

  $("form#promptFour").submit(function(event) {
    event.preventDefault();

    let questionFour = $("select#questionFour").val();

    if (questionFour == 1) {
      $("#ruby").show(); 
      $("form#rate").show();
    } else if (questionFour == 2) {
      $("#java").show();
      $("form#rate").show();
    } else if (questionFour == 3) {
      $("#c").show(); 
      $("form#rate").show();
    } else if (questionFour == 4) { 
      $("#python").show();
      $("form#rate").show();
    }  
  });

  $("form#rate").submit(function(event) {
    event.preventDefault();
  
    let rateMe = $("input#rateMe").val();

    if (rateMe === "10" ) {
      alert("Hey thanks for stroking my ego, bud!");
    } else if (rateMe > 4 ) {
      $("#thanks").show();
    } else {
      $("#boo").show();
    }
  }); 
});
