var currentMatrix=[[],[],[],[],[],[],[],[],[],[],[],[]];
class Matrix {
    constructor(){
        this.matrix=[[],[],[],[],[],[],[],[],[],[],[],[]];
        this.bomb=10;
    }
    generateMatrix(){
        var board = new Board();
        for (let i = 0; i < board.noRow; i++) {
            for (let j = 0; j < board.noCol; j++) {
                this.matrix[i][j]=0;
                //document.getElementsByClassName(`column ${i}`)[0].children[j].innerHTML='0';
            }
        }
        console.log(this.matrix);
    }
    placeMine(){
        var i=0;
        while (i<this.bomb) {
            var col=Math.floor(Math.random() * 11)+ Math.round(Math.random());
            var row = Math.floor(Math.random() * 11)+ Math.round(Math.random());
            if (this.matrix[row][col]==0) {
                this.matrix[row][col]=-1;
                document.getElementsByClassName(`row ${row}`)[0].children[col].classList.add('mine');
                i++;
            }
        }

    }

}

document.addEventListener('DOMContentLoaded',()=>{
    var matrix= new Matrix();
    matrix.generateMatrix();
    matrix.placeMine();
    currentMatrix=matrix.matrix;
})