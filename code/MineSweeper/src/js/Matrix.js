var currentMatrix=[[],[],[],[],[],[],[],[],[],[],[],[]];
var mineStack=[];
var markCount=0;
var mineMap=15;
class Matrix {
    constructor(){
        this.matrix=[[],[],[],[],[],[],[],[],[],[],[],[]];
        this.bomb=mineMap;
    }
    generateMatrix(){
        var board = new Board();
        for (let i = 0; i < board.noRow; i++) {
            for (let j = 0; j < board.noCol; j++) {
                this.matrix[i][j]=0;
            }
        }
    }
    placeMine(){
        var i=0;
        while (i<this.bomb) {
            var col=Math.floor(Math.random() * 11)+ Math.round(Math.random());
            var row = Math.floor(Math.random() * 11)+ Math.round(Math.random());
            if (this.matrix[row][col]==0) {
                this.matrix[row][col]=-1;
                mineStack.push({row:row,col:col});
                //document.getElementsByClassName(`row ${row}`)[0].children[col].classList.add('mine');
                i++;
            }
        }

    }

}

document.addEventListener('DOMContentLoaded',()=>{
    var panel = new Panel();
    panel.levelSelect();

})