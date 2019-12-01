var noReverseFlag=0;
var secondLife=0;
class Board {
    constructor(){
        this.noRow=12;
        this.noCol=12;
    }
    render()
    {
        var cell= new Cell();   
        var container=document.getElementById('game-area');
        for (let i = 0; i < this.noRow; i++) {
            var innerDiv = document.createElement('div');
            innerDiv.setAttribute('class','row '+i);
            for (let j = 0; j < this.noCol; j++) {
                var innerCol= document.createElement('div');
                innerCol.setAttribute('class','column '+ j);
                innerDiv.appendChild(innerCol);
                innerCol.addEventListener('click',()=>{cell.cellClick(i,j)});
                innerCol.addEventListener('contextmenu', function(ev) {
                    ev.preventDefault();
                    cell.placeMark(i,j);
                    return false;
                }, false);
            }
            container.appendChild(innerDiv);
        }
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    var board= new Board();
    board.render();
});