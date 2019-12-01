class Panel {
    constructor(){
        this.width=this.width;
        this.height=this.height;
    }
    createPanel(gameCondition){
        var winPromp;
        if (gameCondition== 'win') {
            winPromp='YOU WIN!';
        }else {
            winPromp='GAME OVER!'
        }
        var container=document.getElementsByClassName('main')[0];
        var overlay = document.createElement('div');
        overlay.setAttribute('class','overlay');
        var innerDiv=document.createElement('div');
        innerDiv.setAttribute('class','panel animate fadeInDown one')
        var panelText= document.createElement('div');
        panelText.setAttribute('class','panel-text');
        panelText.innerHTML= winPromp;
        var btnRetry = document.createElement('button');
        if (gameCondition==='win'){
            btnRetry.setAttribute('class','btn confirm');
            btnRetry.innerHTML='Continue';
            btnRetry.addEventListener('click',()=>{
            innerDiv.classList.add('fadeOutDown');
            setTimeout(()=>{
                overlay.classList.add('hidden');
                
            },1200);
            gameOver=0;
            continueFlag=1;
        })
        }else{
            btnRetry.addEventListener('click',()=>{
                location.reload();
            });
            btnRetry.setAttribute('class','btn retry');
            btnRetry.innerHTML='Retry';
        }
        var btnHome = document.createElement('button');
        btnHome.setAttribute('class','btn home ');
        btnHome.innerHTML='Home';
        btnHome.addEventListener('click',()=>{
            history.go(-1);
        })
        innerDiv.appendChild(panelText);
        innerDiv.appendChild(btnRetry);
        innerDiv.appendChild(btnHome);
        innerDiv.setAttribute('id','panel');
        overlay.appendChild(innerDiv);
        container.appendChild(overlay);
        //innerDiv.classList.add('hidden');
    }
    startGame(){
        var container=document.getElementsByClassName('main')[0];
        var overlay = document.createElement('div');
        overlay.setAttribute('class','overlay');
        var innerDiv=document.createElement('div');
        innerDiv.setAttribute('class','panel animate fadeInDown one')
        var panelText= document.createElement('div');
        panelText.setAttribute('class','panel-text');
        panelText.innerHTML= 'Beat the game!';
        var box = document.createElement('div');
        box.setAttribute('class','box');
        var home=document.createElement('button');
        home.setAttribute('class','btn home');
        home.innerHTML='Home';
        home.addEventListener('click',()=>{
            history.go(-1);
        })
        var button = document.createElement('btn');
        button.setAttribute('class','btn confirm');
        button.innerHTML='Start Game';
        button.addEventListener('click',()=>{
            
            innerDiv.classList.add('fadeOutDown');
            setTimeout(()=>{
                overlay.classList.add('hidden');
                
            },1200);
        })
        innerDiv.appendChild(panelText);
        innerDiv.setAttribute('id','panel');
        innerDiv.appendChild(button);
        innerDiv.append(home);
        overlay.appendChild(innerDiv);
        container.appendChild(overlay);
    }
    
}
