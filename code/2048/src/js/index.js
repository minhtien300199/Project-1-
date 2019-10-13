class Matrix{
    constructor(){
        
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    generateNumber(startFlag) {
        var row=this.getRndInteger(0,3);
        var col=this.getRndInteger(0,3);
        var i=0;
        while (startFlag===0 && i<2) {
            if (curMatrix[row][col]==0) {
                curMatrix[row][col]=2;
                var holder = document.createElement('div');
                holder.setAttribute('class','holder')
                var block =document.createElement('div');
                block.setAttribute('class','block');
                holder.appendChild(block);
                //stackBlock.push(holder);
                document.getElementsByClassName('row '+row)[0].childNodes[col].appendChild(holder);
                block.innerHTML='2';
                i++;
            }else {
                row=this.getRndInteger(0,3);
                col=this.getRndInteger(0,3);
            }
        }
    }
    mergeCell(){

    }
    collectstack(dir){
        stackBlock=[];
        var count=0;
        if (dir==40) { //down
            for (let j = 0; j < 4; j++) {
            for (let i = 3; i >=0; i--) {
                    if (curMatrix[i][j]!=0) {
                        stackBlock[count]=document.getElementsByClassName('row '+i)[0].childNodes[j].childNodes[0];
                        count++;
                    } 
                    
                }
                
            }
        }
    }
    checkCell(row,col){
        var blank=0;
        if (row==3) {
            return 0;
        }
        for (let i = row+1; i < 4; i++) {
            if (curMatrix[i][col]==0) {
                //ô tiếp là trống
                blank++;
            }else if (curMatrix[i][col]==curMatrix[row][col]) {
                blank++;
            }else if (curMatrix[i][col]!=curMatrix[row][col]) {
                return blank;
            }
        }
        return blank;
    }
    ReachBot(e){
            var container=document.getElementsByClassName('game-container')[0];
            //var curCol=parseInt(e.parentNode.parentNode.classList[1]);
            var containerBot=container.offsetHeight+container.offsetTop-1;
            var blockBot=e.offsetTop+e.offsetHeight;
            return containerBot-blockBot;
            // var curCol=parseInt(e.parentNode.classList[1]);
            // var curRow=parseInt(e.parentNode.parentNode.classList[1]);
            // if (curRow==3) {
            //     return 0;
            // }
            // for (let i = 3; i > curCol; i--) {
            //     if (curMatrix[i][curCol]==0) {
            //         //xem ô trống thì đánh số
            //     }
            // }
    }
    movingBlock(e,id){
        // if (e.childElementCount==2) {
        //     e.removeChild(e.childNodes[1]);
        // }
        var curRow=parseInt(e.parentNode.parentNode.classList[1]);
        var curCol=parseInt(e.parentNode.classList[1]);
        var distance1= this.checkCell(curRow,curCol);
        // var distance=this.ReachBot(e);
        // if (distance<=5) {
        //     distance=0;
        // }
        //e.offsetTop+distance
        var nextRow= curRow+distance1;
        curMatrix[curRow][curCol]=0;
        curMatrix[nextRow][curCol]=parseInt(e.childNodes[0].innerText);
        var nextPos=document.getElementsByClassName('row '+nextRow)[0].childNodes[curCol].offsetTop+1;
        var cssAnimation = document.createElement('style');
        cssAnimation.type = 'text/css';
        var rules = document.createTextNode(`@-webkit-keyframes slider${id} {`+
        `from { top:${e.offsetTop}px; }`+
        `to { top:${nextPos}px; }`+
        '}');
        cssAnimation.appendChild(rules);
        
        e.appendChild(cssAnimation);
        e.style.animation=`slider${id} 500ms`;
        setTimeout(()=>{
            
            e.removeAttribute('style');
            e.style.top=nextPos
            e.removeChild(e.childNodes[1]);
            document.getElementsByClassName('row '+nextRow)[0].childNodes[curCol].appendChild(e);
        },500);
    }

}

document.addEventListener('DOMContentLoaded',()=>{
    var board = new Board();
    board.render();
    var matrix = new Matrix();
    matrix.generateNumber(0);
    // stackBlock.forEach(element => {
    //     var setMoving= setInterval(matrix.test,1,element);
    // });
    matrix.collectstack(40);
    for (let i = 0; i < stackBlock.length; i++) {
        matrix.movingBlock(stackBlock[i],i);
        
    }
    //matrix.test2(stackBlock[0]);
});
var matrix = new Matrix();
//matrix.test();
//var id =setInterval(matrix.test,1);    