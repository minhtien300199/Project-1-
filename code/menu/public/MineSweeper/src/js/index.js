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
        
        document.getElementsByClassName('row '+curRow)[0].childNodes[curCol].classList.add('check');
        if (currentMatrix[curRow][curCol]==0) {
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (i!==0 || j!==0) { //loại ô đang xét
                        var tempRow= curRow+i;
                        var tempCol=curCol+j;
                        if (curRow+ i>=0 && curRow+i <= 11 && curCol+j>=0 && curCol+j<=11 ) {
                            if (document.getElementsByClassName('row '+ tempRow)[0].childNodes[tempCol].classList.contains('check')!=true ) {
                                if (this.checkMine(tempRow,tempCol)==0) {
                                    if (document.getElementsByClassName('row '+ tempRow)[0].childNodes[tempCol].classList.contains('mark')==true) {
                                        document.getElementsByClassName('row '+ tempRow)[0].childNodes[tempCol].classList.remove('mark');
                                        markCount--;
                                        document.getElementsByClassName('mine-left')[0].children[0].innerHTML=`Mine left:${mineStack.length-markCount}`;
                                    }
                                    this.spreadCell(curRow+i,curCol+j);
                                }else {
                                    document.getElementsByClassName('row '+tempRow)[0].childNodes[tempCol].innerHTML=`${this.checkMine(tempRow,tempCol)}`
                                    document.getElementsByClassName('row '+tempRow)[0].childNodes[tempCol].classList.add('check');
                                }
                            }
                        }
                    }
                    
                }
                
            }
        }
    }
    checkWin(){
        var count =0;
        for (let i = 0; i < currentMatrix.length; i++) {
            for (let j = 0; j < currentMatrix.length; j++) {
                if (document.getElementsByClassName(`row ${i}`)[0].childNodes[j].classList.contains('mark')==true && currentMatrix[i][j]==-1) {
                    count++;
                }
            }
        }
        if (count==mineStack.length) {
            return 1;
        }
        return 0;
    }
    placeMark(curRow,curCol){
        if (markCount<mineStack.length && document.getElementsByClassName('row '+curRow)[0].childNodes[curCol].classList.contains('check')==false) {
            if (document.getElementsByClassName('row '+curRow)[0].childNodes[curCol].classList.contains('mark')==false) {
                document.getElementsByClassName('row '+curRow)[0].childNodes[curCol].classList.toggle('mark');
                markCount++;
                document.getElementsByClassName('mine-left')[0].children[0].innerHTML=`Mine left:${mineStack.length-markCount}`;
            }else if (document.getElementsByClassName('row '+curRow)[0].childNodes[curCol].classList.contains('mark')==true) {
                document.getElementsByClassName('row '+curRow)[0].childNodes[curCol].classList.toggle('mark');
                markCount--;
                document.getElementsByClassName('mine-left')[0].children[0].innerHTML=`Mine left:${mineStack.length-markCount}`;
            }
        } else if (markCount>=mineStack.length) {
            if (document.getElementsByClassName('row '+curRow)[0].childNodes[curCol].classList.contains('mark')==true) {
                document.getElementsByClassName('row '+curRow)[0].childNodes[curCol].classList.toggle('mark');
                markCount--;
                document.getElementsByClassName('mine-left')[0].children[0].innerHTML=`Mine left:${mineStack.length-markCount}`;
            }
        }
        if (this.checkWin()==1) {
            var panel = new Panel();
            panel.createPanel('win');
            // console.log('you have win the game!');
        }
    }
    showAllMine(curRow,curCol){
        while (mineStack.length>0) {
            var mine= mineStack.pop();
            if (mine.row==curRow && mine.col==curCol) {
                document.getElementsByClassName('row '+mine.row)[0].childNodes[mine.col].classList.add('curMine');
                continue;
            }
            document.getElementsByClassName('row '+mine.row)[0].childNodes[mine.col].classList.add('mine');
        }
    }
    cellClick(curRow,curCol){
        // if (this.checkMine(curRow,curCol)===-1 && secondLife===0) {
            
        // }
        if (document.getElementsByClassName('row '+ curRow)[0].childNodes[curCol].classList.contains('mark')===true) {
            return;
        }
        //nếu = 0 thì loang xung quanh
        if (this.checkMine(curRow,curCol)===0) {
            this.spreadCell(curRow,curCol);
        }else if (this.checkMine(curRow,curCol)===-1) { //là bom
            this.showAllMine(curRow,curCol);
            var panel = new Panel();
            panel.createPanel('lose');
            // console.log('end game');
        } else {
            document.getElementsByClassName('row '+ curRow)[0].childNodes[curCol].innerHTML=`${this.checkMine(curRow,curCol)}`;
            document.getElementsByClassName('row '+ curRow)[0].childNodes[curCol].classList.add('check');
        }
    }
}