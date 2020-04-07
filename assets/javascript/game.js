
$( document ).ready(function() {

   var Char = function(name,hp,attack,counter,img){
      this.name=name;
      this.hp=hp;
      this.attack=attack;
      this.counter=counter;
      this.img=img;
   }


   var luke = new Char("Luke Skywalker",100,25,15,'./assets/images/luke.jpg')
   var han = new Char("Han Solo",100,25,15,'./assets/images/han.jpg')
   var obi = new Char("Obi Wan Kenobi",100,25,15,'./assets/images/obi.jpg')
   var yoda = new Char("Yoda",100,25,15,'./assets/images/yoda.jpg')
   var lightChar = [luke, han, obi, yoda]

   var vader = new Char("Darth Vader",100,25,15,'./assets/images/vader.jpg')
   var sidious = new Char("Darth Sidous",100,25,15,'./assets/images/sidious.jpg')
   var maul = new Char("Darth Maul",100,25,15,'./assets/images/maul.jpg')
   var kylo = new Char("Kylo Ren",100,25,15,'./assets/images/kylo.jpg')
   var darkChar = [vader, sidious, maul, kylo]

//on click of side appear characters to choose from

$(".pickside").on("click", function(){
   console.log($(this).attr("side") + "was clicked")
  

   if($(this).attr("side")==="light"){

    $("#yourChar").html("<h2>Choose your fighter</h2>")
    for(var i=0;i<lightChar.length;i++){
      var lightDiv = $("<div>")
      lightDiv.addClass("card lightCard align-items-center")
      var lcBody =$("<div>")
      lcBody.addClass("card-body")
      var lcTitle=$("<h5>")
      lcTitle.addClass("card-title")
      var lcText=$("<p>")
      lcText.addClass("card-text text-left")
    $("#yourChar").append(lightDiv)
    lightDiv.append("<img src="+lightChar[i].img+" id="+lightChar[i].name+">")
    lightDiv.append(lcBody)
    lcBody.append(lcTitle, lcText)
    lcTitle.html(lightChar[i].name)
    lcText.html("Health: "+ lightChar[i].hp)
    lcText.append("<br>Attack: "+ lightChar[i].attack)
   
    }

 }
 else if($(this).attr("side")==="dark"){

$("#yourChar").html("<h2>Choose your fighter</h2>")
   for(var i=0;i<darkChar.length;i++){
      var darkDiv = $("<div>")
      darkDiv.addClass("card darkCard align-items-center")
      var dcBody =$("<div>")
      dcBody.addClass("card-body")
      var dcTitle=$("<h5>")
      dcTitle.addClass("card-title")
      var dcText=$("<p>")
      dcText.addClass("card-text text-left")
    $("#yourChar").append(darkDiv)
    darkDiv.append("<img src="+darkChar[i].img+" id="+darkChar[i].name+">")
    darkDiv.append(dcBody)
    dcBody.append(dcTitle, dcText)
    dcTitle.html(darkChar[i].name)
    dcText.html("Health: "+ darkChar[i].hp)
    dcText.append("<br>Attack: "+ darkChar[i].attack)
   
    }

 }
    
});

//on click of char display game layout
    //chosen char to yourChar div
    // enemies to enemies div
    //attack section
    //defender section

$(document).on("click",".lightCard",function(){

   console.log("a fighter was selected")
   console.log($(this).attr("id"))


      $("#yourChar").html("<h2>Your fighter</h2>")
      $("#yourChar").append(this)
      $("#enemies").html("<h2>Enemies</h2>")
      for(var i=0;i<darkChar.length;i++){
         var darkDiv = $("<div>")
         darkDiv.addClass("card  align-items-center")
         var dcBody =$("<div>")
         dcBody.addClass("card-body")
         var dcTitle=$("<h5>")
         dcTitle.addClass("card-title")
         var dcText=$("<p>")
         dcText.addClass("card-text text-left")
       $("#enemies").append(darkDiv)
       darkDiv.append("<img src="+darkChar[i].img+" id="+darkChar[i].name+">")
       darkDiv.append(dcBody)
       dcBody.append(dcTitle, dcText)
       dcTitle.html(darkChar[i].name)
       dcText.html("Health: "+ darkChar[i].hp)
       dcText.append("<br>Attack: "+ darkChar[i].attack)
      
       $("img").addClass("emp")
       }
      $("#attack").html("<button id='attack'>Attack</button>")
   moveDef()

});

$(document).on("click",".darkCard",function(){

   console.log("a fighter was selected")
   console.log($(this).attr("id"))

  

      $("#yourChar").html("<h2>Your fighter</h2>")
      $("#yourChar").append(this)
      $("#enemies").html("<h2>Enemies</h2>")
      for(var i=0;i<lightChar.length;i++){
         var lightDiv = $("<div>")
         lightDiv.addClass("card  align-items-center")
         var lcBody =$("<div>")
         lcBody.addClass("card-body")
         var lcTitle=$("<h5>")
         lcTitle.addClass("card-title")
         var lcText=$("<p>")
         lcText.addClass("card-text text-left")
       $("#enemies").append(lightDiv)
       lightDiv.append("<img src="+lightChar[i].img+" id="+lightChar[i].name+">")
       lightDiv.append(lcBody)
       lcBody.append(lcTitle, lcText)
       lcTitle.html(lightChar[i].name)
       lcText.html("Health: "+ lightChar[i].hp)
       lcText.append("<br>Attack: "+ lightChar[i].attack)
      
       }
      $("#attack").html("<button id='attack'>Attack</button>")
     moveDef()
});


function moveDef(){
   
   $(document).on("click",".card",function(){

   console.log("a fighter was selected")
   
  $("#defender").html(this)
  
     
      
});
}


  


  






// on click of enemy move to defender section


//on click of attack button subtract hit points from health of enemy and add by base
    //if no enemy display alert
//also subtract counter hit points from character


//if enemy points reaches 0 you win, enemy disappears, choos new character
//esle if your points reaches 0 you lose


});