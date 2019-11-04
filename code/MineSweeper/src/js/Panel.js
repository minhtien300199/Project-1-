var level=[10,15,20,30,50];
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
        btnRetry.addEventListener('click',()=>{
            location.reload();
        });
        btnRetry.setAttribute('class','btn retry');
        btnRetry.innerHTML='Retry';
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
    levelSelect(){
        var container=document.getElementsByClassName('main')[0];
        var overlay = document.createElement('div');
        overlay.setAttribute('class','overlay');
        var innerDiv=document.createElement('div');
        innerDiv.setAttribute('class','panel animate fadeInDown one')
        var panelText= document.createElement('div');
        panelText.setAttribute('class','panel-text');
        panelText.innerHTML= 'choose your level';
        var box = document.createElement('div');
        box.setAttribute('class','box');
        var selector = document.createElement('select');
        var home=document.createElement('button');
        home.setAttribute('class','btn home');
        home.innerHTML='Home';
        home.addEventListener('click',()=>{
            history.go(-1);
        })
        for (let i = 0; i < level.length; i++) {
            var options= document.createElement('option');
            options.setAttribute('value',`${level[i]}`);
            var temp = this.setLevelHtml(i);
            options.innerHTML=temp;
            selector.appendChild(options);
        }
        var button = document.createElement('button');
        button.setAttribute('class','btn confirm');
        button.innerHTML='Confirm';
        button.addEventListener('click',()=>{
            mineMap= parseInt(document.querySelector('select').selectedOptions[0].value);
            var matrix= new Matrix();   //đặt mine
            matrix.generateMatrix();
            matrix.placeMine();
            currentMatrix=matrix.matrix;
            innerDiv.classList.add('fadeOutDown');
            setTimeout(()=>{
                overlay.classList.add('hidden');
                
            },1200);
        })
        box.appendChild(selector);
        innerDiv.appendChild(panelText);
        innerDiv.setAttribute('id','panel');
        innerDiv.appendChild(selector);
        innerDiv.appendChild(button);
        innerDiv.append(home);
        overlay.appendChild(innerDiv);
        container.appendChild(overlay);
    }
    setLevelHtml(index){
        switch (index) {
            case 0: 
            return 'easy';
            case 1: 
            return 'medium';
            case 2:
                return 'hard';
            case 3:
                return 'insane';
            case 4: 
                return 'inhuman';
            default:
                break;
        }
    }
}
