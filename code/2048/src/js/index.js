class Matrix {
  constructor() {
    this.preMatrix=[[],[],[],[]];
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  checkWin(){
    for (let i = 0; i < curMatrix.length; i++) {
      for (let j = 0; j < curMatrix.length; j++) {
        if (curMatrix[i][j]==2048) {
          console.log('win!');
        }
      }
    }
  }
  checkLose(){
    //check ngang
    for (let i = 0; i < curMatrix.length; i++) {
      for (let j = 0; j < 3; j++) {
        if (curMatrix[i][j]=== curMatrix[i][j+1]) {
          return 0;
        }
      }
    }
    //check dọc
    for (let j = 0; j < curMatrix.length; j++) {
      for (let i = 0; i < 3; i++) {
        if (curMatrix[i][j]===curMatrix[i+1][j]) {
          return 0;
        }        
      }      
    }
    return 1;
  }
  validMatrix(){
    var temp=0;
    for (let i = 0; i < curMatrix.length; i++) {
      for (let j = 0; j < curMatrix.length; j++) {
        if (curMatrix[i][j]==0) {
          temp++;
        }
      }
    }
    if (temp>0) {
      return 1;
    }else if (temp==0) {
      var isLose = this.checkLose();
      if (isLose===1) {
        return 0;
      }
      return 1;
    }
  }
  saveMatrix(){
    for (let i = 0; i < curMatrix.length; i++) {
      this.preMatrix[i]=[...curMatrix[i]];
      
    }
  }
  checkMatrix(){
    for (let i = 0; i < curMatrix.length; i++) {
      for (let j = 0; j < curMatrix.length; j++) {
        if (this.preMatrix[i][j]!=curMatrix[i][j]) {
          return 1;
        }
      }
    }
    var checkMove= this.validMatrix();
    if (checkMove===0) {
      console.log('end game');
      var panel= new Panel();
      panel.createPanel('lose');
      gameOver=1;
    }
    return 0;
  }
  generateNumber(num) {
    var row = this.getRndInteger(0, 3);
    var col = this.getRndInteger(0, 3);
    var pool = [2, 2, 2, 2, 2, 2, 2, 2, 4, 4];
    var i = 0;
    var isValid = this.validMatrix();
    if (isValid==0) {
      console.log('gameOver');
      gameOver=1;
      return;
    }
    while (i < num) {
      if (curMatrix[row][col] == 0) {
        var randomize = this.getRndInteger(0, 9);
        curMatrix[row][col] = pool[randomize];
        var holder = document.createElement("div");
        holder.setAttribute("class", `holder num${pool[randomize]}`);
        var block = document.createElement("div");
        block.setAttribute("class", "block");
        holder.appendChild(block);
        document
          .getElementsByClassName("row " + row)[0]
          .childNodes[col].appendChild(holder);
        block.innerHTML = `${pool[randomize]}`;
        i++;
      } else {
        row = this.getRndInteger(0, 3);
        col = this.getRndInteger(0, 3);
      }
    }
  }
  mergeCell() {}
  collectstack(dir) {
    stackBlock = [];
    var count = 0;
    if (dir == 40) {
      //down
      for (let j = 0; j < 4; j++) {
        for (let i = 3; i >= 0; i--) {
          if (curMatrix[i][j] != 0) {
            stackBlock[count] = {
              item: document.getElementsByClassName("row " + i)[0].childNodes[j]
                .childNodes[0],
              flag: 0
            };
            count++;
          }
        }
      }
    } else if (dir == 38) {
      //up
      for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 4; i++) {
          if (curMatrix[i][j] != 0) {
            stackBlock[count] = {
              item: document.getElementsByClassName("row " + i)[0].childNodes[j]
                .childNodes[0],
              flag: 0
            };
            count++;
          }
        }
      }
    } else if (dir == 39) {
      for (let i = 0; i < 4; i++) {
        for (let j = 3; j >= 0; j--) {
          if (curMatrix[i][j] != 0) {
            stackBlock[count] = {
              item: document.getElementsByClassName("row " + i)[0].childNodes[j]
                .childNodes[0],
              flag: 0
            };
            count++;
          }
        }
      }
    } else if (dir==37) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (curMatrix[i][j]!=0) {
            stackBlock[count] = {
              item: document.getElementsByClassName("row " + i)[0].childNodes[j]
                .childNodes[0],
              flag: 0
            };
            count++;
          }
        }
      }
    }
  }
  checkCell(row, col, preFlag, dir) {
    var blank = 0;
    var mergeFlag = 0;
    if (dir == 40) {
      //nút xuống
      if (row == 3) {
        return { blank, mergeFlag };
      }
      for (let i = row + 1; i < 4; i++) {
        if (curMatrix[i][col] == 0) {
          //ô tiếp là trống
          blank++;
        } else if (curMatrix[i][col] == curMatrix[row][col]) {
          if (preFlag == 1) {
            continue;
          }
          blank++;
          mergeFlag = 1;
        } else if (curMatrix[i][col] != curMatrix[row][col]) {
          return { blank, mergeFlag };
        }
      }
      return { blank, mergeFlag };
    } else if (dir == 38) {
      //đi lên
      if (row == 0) {
        return { blank, mergeFlag };
      }
      for (let i = row - 1; i >= 0; i--) {
        if (curMatrix[i][col] == 0) {
          //ô tiếp là trống
          blank--;
        } else if (curMatrix[i][col] == curMatrix[row][col]) {
          if (preFlag == 1) {
            continue;
          }
          blank--;
          mergeFlag = 1;
        } else if (curMatrix[i][col] != curMatrix[row][col]) {
          return { blank, mergeFlag };
        }
      }
      return { blank, mergeFlag };
    } else if (dir == 39) {
      if (col == 3) {
        return { blank, mergeFlag };
      }
      for (let i = col + 1; i < 4; i++) {
        if (curMatrix[row][i]==0) {
          blank++;
        } else if (curMatrix[row][i] == curMatrix[row][col]) {
          if (preFlag == 1) {
            continue;
          }
          blank++;
          mergeFlag = 1;
        } else if (curMatrix[row][i] != curMatrix[row][col]) {
          return { blank, mergeFlag };
        }
      }
      return { blank, mergeFlag };
    }else if (dir===37) {
      if (col == 0) {
        return { blank, mergeFlag };
      }
      for (let i = col - 1; i >= 0; i--) {
        if (curMatrix[row][i] == 0) {
          //ô tiếp là trống
          blank--;
        } else if (curMatrix[row][i] == curMatrix[row][col]) {
          if (preFlag == 1) {
            continue;
          }
          blank--;
          mergeFlag = 1;
        } else if (curMatrix[row][i] != curMatrix[row][col]) {
          return { blank, mergeFlag };
        }
      }
      return { blank, mergeFlag };
    }
  }

  movingBlock(e, id, preFlag, dir) {
    var curRow = parseInt(e.item.parentNode.parentNode.classList[1]);
    var curCol = parseInt(e.item.parentNode.classList[1]);
    var distance1 = this.checkCell(curRow, curCol, preFlag, dir);
    if (dir == 40 || dir == 38) {
      var nextRow = curRow + distance1.blank;
      curMatrix[curRow][curCol] = 0;
      if (distance1.mergeFlag == 1 && preFlag == 0) {
        curMatrix[nextRow][curCol] =
          parseInt(e.item.childNodes[0].innerText) * 2;
        e.flag = 1;
      } else {
        curMatrix[nextRow][curCol] = parseInt(e.item.childNodes[0].innerText);
      }
      var nextPos =
        document.getElementsByClassName("row " + nextRow)[0].childNodes[curCol]
          .offsetTop + 1;
      var cssAnimation = document.createElement("style");
      cssAnimation.type = "text/css";
      var rules = document.createTextNode(
        `@-webkit-keyframes slider${id} {` +
          `from { top:${e.item.offsetTop}px; }` +
          `to { top:${nextPos}px; }` +
          "}"
      );
      cssAnimation.appendChild(rules);

      e.item.appendChild(cssAnimation);
      e.item.style.animation = `slider${id} 300ms`;
      setTimeout(() => {
        moving=0;
        e.item.style.top = nextPos;
        e.item.removeAttribute("style");
        e.item.removeChild(e.item.childNodes[1]);
        document
          .getElementsByClassName("row " + nextRow)[0]
          .childNodes[curCol].appendChild(e.item);
        if (distance1.mergeFlag == 1) {
          e.item.parentNode.removeChild(e.item.parentNode.childNodes[0]);
          e.item.childNodes[0].innerHTML = `${parseInt(
            e.item.childNodes[0].innerText
          ) * 2}`;
          var temp=parseInt(e.item.childNodes[0].innerText)/2;
          e.item.classList.remove(`num${temp}`);
          e.item.classList.add(`num${e.item.childNodes[0].innerText}`);  
        }
      }, 250);
    } else if (dir == 39||dir==37) {
      var nextCol = curCol + distance1.blank;
      curMatrix[curRow][curCol] = 0;
      if (distance1.mergeFlag == 1 && preFlag == 0) {
        curMatrix[curRow][nextCol] =
          parseInt(e.item.childNodes[0].innerText) * 2; // cập nhật số
        e.flag = 1;
      } else {
        curMatrix[curRow][nextCol] = parseInt(e.item.childNodes[0].innerText);
      }
      var nextPos = document.getElementsByClassName("row " + curRow)[0]
        .childNodes[nextCol].offsetLeft+1;
      var cssAnimation = document.createElement("style");
      cssAnimation.type = "text/css";
      var rules = document.createTextNode(
        `@-webkit-keyframes slider${id} {` +
          `from { left:${e.item.offsetLeft}px; }` +
          `to { left:${nextPos}px; }` +
          "}"
      );
      cssAnimation.appendChild(rules);

      e.item.appendChild(cssAnimation);
      e.item.style.animation = `slider${id} 300ms`;
      setTimeout(() => {
        moving=0;
        e.item.style.left = nextPos;
        e.item.removeAttribute("style");
        e.item.removeChild(e.item.childNodes[1]);
        document
          .getElementsByClassName("row " + curRow)[0]
          .childNodes[nextCol].appendChild(e.item);
        if (distance1.mergeFlag == 1) {
          e.item.parentNode.removeChild(e.item.parentNode.childNodes[0]);
          e.item.childNodes[0].innerHTML = `${parseInt(
            e.item.childNodes[0].innerText
          ) * 2}`;
          var temp=parseInt(e.item.childNodes[0].innerText)/2;
          e.item.classList.remove(`num${temp}`);
          e.item.classList.add(`num${e.item.childNodes[0].innerText}`);          
        }
      }, 250);
    }
    if (id==stackBlock.length-1) {
      this.checkWin();
      if (this.checkMatrix()==0) {
        return;
      }
      setTimeout(()=>{
        this.generateNumber(1);
      },350);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  var panel = new Panel();
  panel.startGame();
  var board = new Board();
  board.render();
  var matrix = new Matrix();
  matrix.generateNumber(2);

  document.addEventListener("keydown", event => {
    if (gameOver==1) {
      return;
    }
    if (event.keyCode === arrowKey.down && moving==0) {
      moving=1;
      matrix.collectstack(arrowKey.down);
      matrix.saveMatrix();
      for (let i = 0; i < stackBlock.length; i++) {
        matrix.movingBlock(
          stackBlock[i],
          i,
          i !== 0 ? stackBlock[i - 1].flag : 0,
          arrowKey.down
        );
      }
    } else if (event.keyCode === arrowKey.up && moving==0) {
      moving=1;
      matrix.collectstack(arrowKey.up);
      matrix.saveMatrix();
      for (let i = 0; i < stackBlock.length; i++) {
        matrix.movingBlock(
          stackBlock[i],
          i,
          i !== 0 ? stackBlock[i - 1].flag : 0,
          arrowKey.up
        );
      }
    } else if (event.keyCode === arrowKey.right && moving==0) {
      moving=1;
      matrix.collectstack(arrowKey.right);
      matrix.saveMatrix();
      for (let i = 0; i < stackBlock.length; i++) {
        matrix.movingBlock(
          stackBlock[i],
          i,
          i !== 0 ? stackBlock[i - 1].flag : 0,
          arrowKey.right
        );
      }
    }else if (event.keyCode===arrowKey.left && moving==0) {
      moving=1;
      matrix.collectstack(arrowKey.left);
      matrix.saveMatrix();
      for (let i = 0; i < stackBlock.length; i++) {
        matrix.movingBlock(
          stackBlock[i],
          i,
          i !== 0 ? stackBlock[i - 1].flag : 0,
          arrowKey.left
        );
      }
    }
  });
});
var matrix = new Matrix();