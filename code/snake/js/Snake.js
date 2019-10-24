class Snake{
    constructor(width,height,color,row,col){
        this.snakeWidth=width;
        this.snakeHeight=height;
        this.snakeColor= color;
        this.row=row;
        this.col=col;
        this.width =Math.floor(objDOM.boardWidth/block);
        this.height =Math.floor(objDOM.boardHeight/block);
        this.context=objDOM.board.getContext('2d');
    }
    update(){
        var ctx= this.context;
        for (let i = 0; i < objDOM.boardWidth; i++) {
            if (i%Math.floor(objDOM.boardHeight/block)===0) {
                //vẽ dường ngang
                ctx.beginPath();
                ctx.moveTo(0,i);
                ctx.lineTo(objDOM.boardWidth,i);
                ctx.stroke();
                //vẽ đường dọc
                ctx.beginPath();
                ctx.moveTo(i,0)
                ctx.lineTo(i,objDOM.boardHeight);
                ctx.stroke();
            }
        }
        if (this.col>=cell.cellWidth*block) { //chạm góc phải chạy lại
            this.col-=cell.cellWidth*block;
        }
        if (this.row>=cell.cellHeight*block) { //chạm góc dưới chạy lại
            this.row-=cell.cellHeight*block;    
        }
        if (this.col<0) {
            this.col=cell.cellWidth*(block-1); //góc trên chạy lại
        }
        if (this.row<0) {
            this.row=cell.cellHeight*(block-1); //góc trái chạy lại
        }
        ctx.fillStyle=this.snakeColor;
        ctx.fillRect(this.row,this.col,this.snakeWidth,this.snakeHeight);
        snakeStack.forEach(e => {
            ctx.fillStyle=this.snakeColor;
            ctx.fillRect(e.row,e.col,this.snakeWidth,this.snakeHeight);
        });
                if (isMovingFlag==0) {
                    snakeStack.push({row:this.row,col:this.col,fruitFlag:0});
                    isMovingFlag=1;
                }else{
                        snakeStack.push({row:this.row,col:this.col,fruitFlag:0});
                }
    }
    isLose(){
        for (let i = 0; i < snakeStack.length-1; i++) {
            if (score>=3) {
                if (snakeStack[i].row==snakeStack[snakeStack.length-1].row && snakeStack[i].col==snakeStack[snakeStack.length-1].col) {
                    if (snakeStack[i].fruitFlag==0) {
                        cell.clearTable();
                        cell.loseNoti();
                        return 1;
                    }
                }
            }
        }
        return 0;
    }
}
var snake = new Snake(Math.floor(objDOM.boardWidth/block),Math.floor(objDOM.boardWidth/block),"blue",40,0);


autoUpdate=()=> {
    if (snake.isLose()==1) {
        return;
    }
    snake.row+=movingSnakeX;
    snake.col+=movingSnakeY;
    if (snakeStack.length!=0) {
        if (score<snakeStack.length) {
            snakeStack.shift();
        }
    }
    cell.clearTable();
    snake.update();
    fruit.randomFruitSpawn();
    fruit.eaten();
}

function start(){ //hàm chạy
    cell.drawtable();
}
start();

document.addEventListener('keydown',(e)=>{
    var temp=Math.floor(objDOM.boardWidth/block);
    if (e.keyCode==keyLeft && keyFlag!='A'&& keyFlag!='D') {
            movingSnakeX-=temp;
            movingSnakeY=0;
            keyFlag='A';
    }else if (e.keyCode==keyRight && keyFlag!='D'&& keyFlag!='A') {
            movingSnakeX+=temp;
            movingSnakeY=0;
            keyFlag='D';
    } else if (e.keyCode==keyUp && keyFlag!='W'&& keyFlag!='S') {
            movingSnakeY-=temp;
            movingSnakeX=0;
            keyFlag='W';
    }else if (e.keyCode==keyDown && keyFlag!='S' && keyFlag!='W') {
            movingSnakeY+=temp;
            movingSnakeX=0;
            keyFlag='S';
    }
})
