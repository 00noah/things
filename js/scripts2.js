$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    // START OF ORIGNIAL SCRIPT PLUS ADDITIONS
    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var animalInput= $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
    //
    // var madArray = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];
    //
    // var tally = 0;
    //
    // madArray.forEach(function(mad) {
    //   var userInput = mad;
    //   $(".output" + tally).text(userInput);
    //   console.log(userInput);
    //   console.log(".output"+tally);
    //   tally += 1;
    // });
    // END OF ORIGNIAL SCRIPT PLUS ADDITIONS


    // START OF FUNCTIONING SCRIPT #1
    var madArray = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    madArray.forEach(function(mad) {
      var userInput = $("input#" + mad).val();
      $("." + mad).text(userInput);
    });
    // END OF FUNCTIONING SCRIPT #1

    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $('.animal').text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
