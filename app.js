// Variables

const startDiv = document.querySelector('.start'),
line = document.querySelector('.line'),
cover = document.querySelector('.cover'),
boxes = document.querySelectorAll('.box'),
player1 = document.querySelector('.player1'),
player2 = document.querySelector('.player2'),
result = document.querySelector('.result'),
turn = document.querySelector('.turn');

let playerNum = 0;

// functions

function startGame(){
    boxes.forEach((box)=>{
        box.innerHTML = '';
    });
    line.classList.add('d-none');
    cover.classList.add('d-none');
    startDiv.classList.add('d-none');
    playerTurn(playerNum)
}

function playerTurn(player){
    if(player === 0){
        player2.style.opacity = 0.4;
        player1.style.opacity = 1;
        turn.innerHTML = "It's <span>O</span> turn"
    }else{
        player1.style.opacity = 0.4;
        player2.style.opacity = 1;
        turn.innerHTML = "It's <span>X</span> turn"
    }
}

function play(e){
    if(playerNum === 0){
        e.target.innerHTML = "<span>O</span>";
        playerNum = 1;
    }else{
        e.target.innerHTML = "<span>X</span>"
        playerNum = 0;
    }
    playerTurn(playerNum);
    checkWin();
}

function showResult(){
    setTimeout(() => {
        startDiv.classList.remove('d-none');
        if(playerNum === 1){
            result.innerHTML = "<span>O</span> wins";
        }else{
            result.innerHTML = "<span>X</span> wins";
        }
    }, 1600);
}

function checkWin(){
    // 1,2,3

    if(boxes[0].innerText === 'X' && boxes[1].innerText === 'X' && boxes[2].innerText === 'X'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(90deg) rotateX(90deg)';
        line.style.top = '20%';
        line.style.left = '50%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(90deg) rotateX(0deg)';
        }, 100);
        showResult();
    }
    if(boxes[0].innerText === 'O' && boxes[1].innerText === 'O' && boxes[2].innerText === 'O'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(90deg) rotateX(90deg)';
        line.style.top = '20%';
        line.style.left = '50%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(90deg) rotateX(0deg)';
        }, 100);
        showResult();
    }

      // 4,5,6

    if(boxes[3].innerText === 'O' && boxes[4].innerText === 'O' && boxes[5].innerText === 'O'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(90deg) rotateX(90deg)';
        line.style.top = '50%';
        line.style.left = '50%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(90deg) rotateX(0deg)';
        }, 100);
        showResult();
    }
    if(boxes[3].innerText === 'X' && boxes[4].innerText === 'X' && boxes[5].innerText === 'X'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(90deg) rotateX(90deg)';
        line.style.top = '50%';
        line.style.left = '50%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(90deg) rotateX(0deg)';
        }, 100);
        showResult();
    }

      // 7,8,9

    if(boxes[6].innerText === 'O' && boxes[7].innerText === 'O' && boxes[8].innerText === 'O'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(90deg) rotateX(90deg)';
        line.style.top = '80%';
        line.style.left = '50%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(90deg) rotateX(0deg)';
        }, 100);
        showResult();
    }
    if(boxes[6].innerText === 'X' && boxes[7].innerText === 'X' && boxes[8].innerText === 'X'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(90deg) rotateX(90deg)';
        line.style.top = '80%';
        line.style.left = '50%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(90deg) rotateX(0deg)';
        }, 100);
        showResult();
    }
      // 1,5,9

    if(boxes[0].innerText === 'O' && boxes[4].innerText === 'O' && boxes[8].innerText === 'O'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(135deg) rotateX(90deg)';
        line.style.top = '50%';
        line.style.left = '50%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(135deg) rotateX(0deg)';
        }, 100);
        showResult();
    }
    if(boxes[0].innerText === 'X' && boxes[4].innerText === 'X' && boxes[8].innerText === 'X'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(135deg) rotateX(90deg)';
        line.style.top = '50%';
        line.style.left = '50%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(135deg) rotateX(0deg)';
        }, 100);
        showResult();
    }
    // 3,5,7

    if(boxes[2].innerText === 'O' && boxes[4].innerText === 'O' && boxes[6].innerText === 'O'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(45deg) rotateX(90deg)';
        line.style.top = '50%';
        line.style.left = '50%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(45deg) rotateX(0deg)';
        }, 100);
        showResult();
    }
    if(boxes[2].innerText === 'X' && boxes[4].innerText === 'X' && boxes[6].innerText === 'X'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(45deg) rotateX(90deg)';
        line.style.top = '50%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(45deg) rotateX(0deg)';
        }, 100);
        showResult();
    }
    // 1,4,7

    if(boxes[0].innerText === 'O' && boxes[3].innerText === 'O' && boxes[6].innerText === 'O'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(0deg) rotateX(90deg)';
        line.style.top = '50%';
        line.style.left = '20%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(0deg) rotateX(0deg)';
        }, 100);
        showResult();
    }
    if(boxes[0].innerText === 'X' && boxes[3].innerText === 'X' && boxes[6].innerText === 'X'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(0deg) rotateX(90deg)';
        line.style.top = '50%';
        line.style.left = '20%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(0deg) rotateX(0deg)';
        }, 100);
        showResult();
    }

    // 2,5,8

    if(boxes[1].innerText === 'O' && boxes[4].innerText === 'O' && boxes[7].innerText === 'O'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(0deg) rotateX(90deg)';
        line.style.top = '50%';
        line.style.left = '50%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(0deg) rotateX(0deg)';
        }, 100);
        showResult();
    }
    if(boxes[1].innerText === 'X' && boxes[4].innerText === 'X' && boxes[7].innerText === 'X'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(0deg) rotateX(90deg)';
        line.style.top = '50%';
        line.style.left = '50%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(0deg) rotateX(0deg)';
        }, 100);
        showResult();
    }

    // 3,6,9

    if(boxes[2].innerText === 'O' && boxes[5].innerText === 'O' && boxes[8].innerText === 'O'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(0deg) rotateX(90deg)';
        line.style.top = '50%';
        line.style.left = '80%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(0deg) rotateX(0deg)';
        }, 100);
        showResult();
    }
    if(boxes[2].innerText === 'X' && boxes[5].innerText === 'X' && boxes[8].innerText === 'X'){
        line.classList.remove('d-none');
        cover.classList.remove('d-none');
        
        line.style.transform = 'translate(-50%,-50%) rotate(0deg) rotateX(90deg)';
        line.style.top = '50%';
        line.style.left = '80%';
        setTimeout(() => {
            line.style.transition = 'all 0.5s linear';
            line.style.transform = 'translate(-50%,-50%) rotate(0deg) rotateX(0deg)';
        }, 100);
        showResult();
    }

    // when tie
    if(!(boxes[2].innerText === 'X' && boxes[5].innerText === 'X' && boxes[8].innerText === 'X') &&
        !(boxes[2].innerText === 'O' && boxes[5].innerText === 'O' && boxes[8].innerText === 'O') &&
        !(boxes[1].innerText === 'X' && boxes[4].innerText === 'X' && boxes[7].innerText === 'X') &&
        !(boxes[1].innerText === 'O' && boxes[4].innerText === 'O' && boxes[7].innerText === 'O') &&
        !(boxes[0].innerText === 'X' && boxes[3].innerText === 'X' && boxes[6].innerText === 'X') &&
        !(boxes[0].innerText === 'O' && boxes[3].innerText === 'O' && boxes[6].innerText === 'O') &&
        !(boxes[2].innerText === 'X' && boxes[4].innerText === 'X' && boxes[6].innerText === 'X') &&
        !(boxes[2].innerText === 'O' && boxes[4].innerText === 'O' && boxes[6].innerText === 'O') &&
        !(boxes[0].innerText === 'X' && boxes[4].innerText === 'X' && boxes[8].innerText === 'X') &&
        !(boxes[0].innerText === 'O' && boxes[4].innerText === 'O' && boxes[8].innerText === 'O') &&
        !(boxes[6].innerText === 'X' && boxes[7].innerText === 'X' && boxes[8].innerText === 'X') &&
        !(boxes[6].innerText === 'O' && boxes[7].innerText === 'O' && boxes[8].innerText === 'O') &&
        !(boxes[3].innerText === 'X' && boxes[4].innerText === 'X' && boxes[5].innerText === 'X') &&
        !(boxes[3].innerText === 'O' && boxes[4].innerText === 'O' && boxes[5].innerText === 'O') &&
        !(boxes[0].innerText === 'O' && boxes[1].innerText === 'O' && boxes[2].innerText === 'O') &&
        !(boxes[0].innerText === 'X' && boxes[1].innerText === 'X' && boxes[2].innerText === 'X') &&
        !(boxes[0].innerText === 'X' && boxes[1].innerText === 'X' && boxes[2].innerText === 'X') &&
        boxes[0].innerText && boxes[1].innerText && boxes[2].innerText && boxes[3].innerText &&
        boxes[4].innerText && boxes[5].innerText && boxes[6].innerText && boxes[7].innerText &&
        boxes[8].innerText){
            cover.classList.remove('d-none');
            setTimeout(() => {
                startDiv.classList.remove('d-none');
                result.innerHTML = "Match is <span>Tie</span>"
            }, 1600);
        }
}

// events

startDiv.addEventListener('click',startGame);
boxes.forEach((box)=>{
    box.addEventListener('click',play);
});