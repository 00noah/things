// Global Variables and Functions
var array1 = [];
var array2 = [];

var pushed = function(item){
  array2.push(item);
};

var pushed2 = function(item1, item2, item3){
  array2 = [item1, item2, item3];
};


$(document).ready(function() {
  $("form#arrayForm").submit(function(event) {
    event.preventDefault();

    var favoriteThing = $("#favoriteThing").val();
    var favoriteFood = $("#favoriteFood").val();
    var favoriteCar = $("#favoriteCar").val();

    array1 = [favoriteThing, favoriteFood, favoriteCar];

    pushed2(array1[1],array1[0],array1[2]);

    $("#orig1").text(array1[0]);
    $("#orig2").text(array1[1]);
    $("#orig3").text(array1[2]);
    $("#new1").text(array2[0]);
    $("#new2").text(array2[1]);
    $("#new3").text(array2[2]);

    $("div#origList").fadeIn(500);
    $("div#newList").fadeIn(1000);



    // pushed(array1[1]);
    // pushed(array1[0]);
    // pushed(array1[2]);

    // Debugging Arrays Working
    // $("#array1").text(array1);
    // $("#array2").text(array2);




    // Debugging
    // console.log("Thing: " + favoriteThing);
    // console.log("Food: " + favoriteFood);
    // console.log("Car: " + favoriteCar);
    // console.log("array1: " + array1);
    // console.log("array2: " + array2);

  });
});
