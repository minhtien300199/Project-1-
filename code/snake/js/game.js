var keyLeft = 37;
var keyUp=38;
var keyRight =39;
var keyDown=40;
var snakeStack=[];
var block=15;
var movingSnakeX=0;
var movingSnakeY=0;
var keyFlag=0;
var spawnFruitFlag=0;
var score=0;
var isMovingFlag=0;


var objDOM={
    board: document.getElementById('game'),
    boardHeight:document.getElementById('game').clientHeight,
    boardWidth:document.getElementById('game').clientWidth,
    scoreBoard:document.getElementsByClassName('score-board')
}

class Cell {
    constructor(){
        this.context=objDOM.board.getContext('2d');
        this.cellHeight=objDOM.board.clientHeight/block;
        this.cellWidth=objDOM.board.clientWidth/block;
    }
    drawtable() {
        this.interval = setInterval(autoUpdate, 150);
    }
    clearTable=()=>{
        var ctx=this.context;
        ctx.clearRect(0,0,objDOM.boardWidth,objDOM.boardHeight);
    }
    loseNoti(){
        var ctx=this.context;
        ctx.font = "30px Arial";
        ctx.fillText("You Lost!",this.cellWidth*((block-1)/2)-50,this.cellHeight*((block-1)/2)-50);
        ctx.fillText(`Final Score: ${score}`,this.cellWidth*((block-1)/2)-50,this.cellHeight*((block-1)/2));
    }
}

var cell = new Cell();
