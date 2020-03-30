
$( document ).ready(function() {
    

//on click of side appear characters to choose from

$(".pickside").on("click", function(){
   console.log($(this).attr("side") + "was clicked")

   if($(this).attr("side")==="light"){

    $("#yourChar").html("<h2>Choose your fighter</h2>")
    $("#yourChar").append("<img src='./assets/images/han.jpg' id='han'>")
    $("#yourChar").append("<img src='./assets/images/luke.jpg' id='luke'>")
    $("#yourChar").append("<img src='./assets/images/obi.jpg'id='obi'>")
    $("#yourChar").append("<img src='./assets/images/yoda.jpg' id='yoda'>")
    $("img").addClass("reb")
   

 }
 else if($(this).attr("side")==="dark"){

    $("#yourChar").html("<h2>Choose your fighter</h2>")
    $("#yourChar").append("<img src='./assets/images/vader.jpg' id='vader'>")
    $("#yourChar").append("<img src='./assets/images/maul.jpg' id='maul'>")
    $("#yourChar").append("<img src='./assets/images/sidious.jpg' id='sidious'>")
    $("#yourChar").append("<img src='./assets/images/kylo.jpg' id='kylo'>")
    $("img").addClass("emp")

 }
    
});

$(document).on("click",".reb",function(){

   console.log("a fighter was selected")
   console.log($(this).attr("id"))


      $("#yourChar").html("<h2>Your fighter</h2>")
      $("#yourChar").append(this)
      $("#enemies").html("<h2>Enemies</h2>")
      $("#enemies").append("<img src='./assets/images/vader.jpg'>")
      $("#enemies").append("<img src='./assets/images/maul.jpg'>")
      $("#enemies").append("<img src='./assets/images/sidious.jpg'>")
      $("#enemies").append("<img src='./assets/images/kylo.jpg'>")
   

});

$(document).on("click",".emp",function(){

   console.log("a fighter was selected")
   console.log($(this).attr("id"))

  

      $("#yourChar").html("<h2>Your fighter</h2>")
      $("#yourChar").append(this)
      $("#enemies").html("<h2>Enemies</h2>")
      $("#enemies").append("<img src='./assets/images/han.jpg' id='han'>")
      $("#enemies").append("<img src='./assets/images/luke.jpg' id='luke'>")
      $("#enemies").append("<img src='./assets/images/obi.jpg'id='obi'>")
      $("#enemies").append("<img src='./assets/images/yoda.jpg' id='yoda'>")
  
});
//on click of char display game layout
    //chosen char to yourChar div
    // enemies to enemies div
    //attack section
    //defender section



  


  






// on click of enemy move to defender section


//on click of attack button subtract hit points from health of enemy and add by base
    //if no enemy display alert
//also subtract counter hit points from character


//if enemy points reaches 0 you win, enemy disappears, choos new character
//esle if your points reaches 0 you lose


});