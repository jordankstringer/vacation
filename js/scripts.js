$(document).ready(function() {
  $("form#vacationAdvisor").submit(function(event) {
    event.preventDefault();


    var q1 = $("#q1").val();
    var q2 = $("#q2").val();
    var q3 = $("#q3").val();
    var q4 = $("#q4").val();
    var q5 = $("#q5").val();
    var camping = 0;
    var mountains = 0;
    var beach = 0;


    if (q1 === "a") {
      camping += 1;
    } else if (q1 === "b") {
        mountains += 1;
    }  else {
        beach += 1;
    }

    if (q2 === "a") {
      camping += 1;
    } else if (q2 === "b") {
        mountains += 1;
    }  else {
        beach += 1;
    }

    if (q3 === "a") {
      camping += 1;
    } else if (q3 === "b") {
        mountains += 1;
    }  else {
        beach += 1;
    }

    if (q4 === "a") {
      camping += 1;
    } else if (q4 === "b") {
        mountains += 1;
    }  else {
        beach += 1;
    }

    if (q5 === "a") {
      camping += 1;
    } else if (q5 === "b") {
        mountains += 1;
    }  else {
        beach += 1;
    }


    if (camping >= 3) {
      $("#camping1").toggle();
    } else if (mountains >= 3) {
        $("#mountains1").toggle();
      }  else {
          $("#beach1").toggle();
    }

  


  });
});
