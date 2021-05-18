class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){

    form.hide();
    textSize(30);
    text("Game Start", 120, 100)

    Player.getAllPlayersInfo();

   // with the allPlayers information, we will highlight the player and show the name on the screen
    //[P1, P2,P3,P4]
    if (allPlayers !== undefined ){

      var dispPos = 120;

      for( var plr in allPlayers){

        if(plr === "player" + player.index){
          fill("red");
        }
        else{
         fill("black"); 
        }

      dispPos += 50;
      //fill("red");
      text(allPlayers[plr].name + " "+ allPlayers[plr].distance,20, dispPos)

      }
    }
    if (keyIsDown(UP_ARROW) && player.index !== null){
        player.distance += 50;
        player.update();

    }

  }
}