// var DOMcollector={
//     gameContainer:document.querySelector('.game-container')
// };
var map = {
    38: 0, // Up
    39: 1, // Right
    40: 2, // Down
    37: 3, // Left
    75: 0, // vim keybindings
    76: 1,
    74: 2,
    72: 3  
};
var stackBlock=[];
var curMatrix=[
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]];
class Board {
    constructor(){
        this.row=4;
        this.col=4;
    }
    render(){
        var container=document.getElementsByClassName('game-container')[0];
        for (let i = 0; i < this.row; i++) {
            var innerRow = document.createElement('div');
            innerRow.setAttribute('class','row '+i);
            for (let j = 0; j < this.col; j++) {
                var innerCol=document.createElement('div');
                innerCol.setAttribute('class','col '+j);
                innerRow.appendChild(innerCol);
            }
            container.appendChild(innerRow);
        }
    }
}