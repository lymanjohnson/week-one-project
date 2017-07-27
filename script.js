const button = document.getElementById("logo");

button.addEventListener("click", toggleDayNight); //do not need () when referring to the "toggle" function here

function toggleDayNight() {
  var dayElements = document.getElementsByClassName("day");
  var nightElements = document.getElementsByClassName("night");

  if (this.classList.contains("day")) { //checks to see what setting the button is at
    while(dayElements.length>0){
      dayElements[0].classList.add("night");
      dayElements[0].classList.remove("day");
    }
  }

  else if (this.classList.contains("night")) { //checks to see what setting the button is at
    while(nightElements.length>0){
      nightElements[0].classList.add("day");
      nightElements[0].classList.remove("night");
    }
  }

}

//
// The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.
//
// Tip: You can use the length property of the NodeList object to determine the number of elements with a specified class name, then you can loop through all elements and extract the info you want.


// const button = document.getElementById( "nightmode-button" );
//
// button.addEventListener( "click", function(){
  //
  // $("#nightmode-button").click(function() {
  //     $(this).toggleClass("myclass");
  //     $(this).toggleClass("showhidenew");
  // });
// $(document).ready(function (){
//
//   $(#nightmode-button).click(function() {
//     if ($(#nightmode-button).hasClass("day")){
//       $(.day).addClass("toggle");
//       $(.toggle).removeClass("day");
//       $(.toggle).addClass("night");
//       $(.night).removeClass("toggle");
//     }
//
//     if ($(#nightmode-button).hasClass("night")){
//       $(.night).addClass("toggle");
//       $(.toggle).removeClass("night");
//       $(.toggle).addClass("day");
//       $(.day).removeClass("toggle");
//     }
//
//   });
// });


    // if ($(.pg).hasClass("day")){
    //   $(.pg).removeClass("day");
    //   $(.pg).addClass("night");
    // }
    // else if ($(.pg).hasClass("night")){
    //   $(.pg).removeClass("night");
    //   $(.pg).addClass("day");
    // }

    // $(".day").removeClass("day");
    // $(*).addClass("night")
    //
    //   if ($(".pg").hasClass("day")) {
    //     $(".pg").removeClass("day");
    //     $(".pg").addClass("night");
    //   }
    //   else if ($(".pg").hasClass("night")){
    //     $(".pg").removeClass("night");
    //     $(".pg").addClass("day");






//
// // When the button is clicked

//
//     button.click(function() {
//       if ($(".pg").hasClass("day")) {
//         $(".pg").removeClass("day");
//         $(".pg").addClass("night");
//         }
//     }
// }
//
// );
//
//

// //
// $(document).ready(function() {
//   $(".yoke").click(function() {
//     if ($(".pg").hasClass("night")) {
//       $(".pg").removeClass("night");
//       $(".pg").addClass("day");


//Chherawalia"s code:
// var bodyColor = document.getElementsByTagName("BODY")[0];
//          bodyColor.style.backgroundColor = "blue";
//          document.write("Day");
