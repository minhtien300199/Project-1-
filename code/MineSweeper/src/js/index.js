class Cell {
    constructor(){
        
    }
    checkMine(curRow,curCol){
        var noMine=0;
        var board = new Board();
        for (let i = curRow-1; i <= curRow+1; i++) {
            for (let j = curCol-1; j <= curCol+1; j++) {
                if (currentMatrix[curRow][curCol]===-1) {
                    return noMine=-1;
                }
                if (i<0 || j<0 || i>=board.noRow || j>=board.noCol) {
                    continue;
                }
                if (currentMatrix[i][j]==currentMatrix[curRow][curCol]) {
                    continue;
                }else{
                    if (currentMatrix[i][j]==-1) {
                        noMine++;
                    }
                }
            }
            
        }
        return noMine;
    }
    spreadCell(curRow,curCol){
        var i=curRow;
        var j=curCol;
        if (this.checkMine(i,j)===0) { //ô chưa đánh dấu thì đánh dấu
            currentMatrix[i][j]=9;
            document.getElementsByClassName('row '+i)[0].childNodes[j].classList.add('check');
        }
        if (j<11 && this.checkMine(i,j+1)===0) { //dò bên phải
            j++;    
            this.spreadCell(i,j);
        } else if (i-1>=0 && this.checkMine(i-1,j)===0) { //dò lên trên
            i--;
            this.spreadCell(i,j);
        } else if (j-1>=0 && (this.checkMine(i,j-1)===0||this.checkMine(i,j-1)===9)) { //dò bên trái
            j--;
            this.spreadCell(i,j);
        } else if (i+1<11 && (this.checkMine(i+1,j)==0|| this.checkMine(i+1,j)==9)) {
            i++;
            this.spreadCell(i,j);
        }
        if (curRow<0||curRow>=12||curCol<0||curCol>=12) {
            return;
            
        }
    }
    cellClick(curRow,curCol){
        //nếu = 0 thì loang xung quanh
        if (this.checkMine(curRow,curCol)===0) {
            this.spreadCell(curRow,curCol);
        }
        console.log(currentMatrix);
        //nếu khác 0 thì mở 1 ô
        //console.log(`Row:${curRow},Col:${curCol},mine:${this.checkMine(curRow,curCol)}`);
    }
}