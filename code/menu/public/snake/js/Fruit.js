
class Fruit {
    constructor(){

        this.width =Math.floor(objDOM.boardWidth/block);
        this.height =Math.floor(objDOM.boardHeight/block);
        this.context=objDOM.board.getContext('2d');
        this.row=240;
        this.col=240;
    }
    randomRowCol()
    {
        var randRow;
        var randCol;
        var fruitRow;
        var fruitCol;
        while (true) {
            randRow= Math.abs(Math.floor(Math.random() * 11) +Math.floor((Math.floor(Math.random() * 10)+1)/2)-1);
            randCol= Math.abs(Math.floor(Math.random() * 11) +Math.floor((Math.floor(Math.random() * 10)+1)/2)-1);
            fruitRow=this.width*randRow;
            fruitCol=this.height*randCol;
            if (this.checkSpawn(fruitRow,fruitCol)==0) {
                this.row=fruitRow;
                this.col=fruitCol;
                break;
            }
        }
    }
    randomFruitSpawn(){
        //1-15
        //this.randomRowCol();
        var ctx= this.context;
        ctx.fillStyle='red';
        ctx.fillRect(this.row,this.col,this.width,this.height);
        //trường hợp bị ăn rồi mất
        //trường hợp đầu tiên vào spawn
        //trường hợp hết tg thì mất
    }
    checkSpawn(fruitRow,fruitCol){
        for (let i = 0; i < snakeStack.length; i++) {
            if (snakeStack[i].row==fruitRow && snakeStack[i].col==fruitCol) {
                //sai trả về 1
                return 1;
            }
        }
        return 0;
    }
    eaten(){
        if (snakeStack[snakeStack.length-1].row==this.row && snakeStack[snakeStack.length-1].col==this.col) {
            snakeStack[snakeStack.length-1].fruitFlag=1;
            this.randomRowCol();
            this.randomFruitSpawn();
            score++;
            cell.clearTable();
            snake.update();
            objDOM.scoreBoard[0].innerHTML=`Current Score: ${score}`;
        }
    }
}
var fruit = new Fruit();