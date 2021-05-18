class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //this will get called, when player enters name in form class
  update(){

    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance : this.distance    
    });
  }


  //this function will get all the players info from database
  static getAllPlayersInfo(){

    var playerInfoRef = database.ref('players');
    playerInfoRef.on('value',(data)=>{
    allPlayers=data.val();

    });
  }

}