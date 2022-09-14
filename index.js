let countHome = 0;
let countGuest = 0
let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let winner = document.getElementById("winner");

function whoWins(){
    if(countHome > countGuest){
        return winner.textContent = "The leading team is HOME";
    }else if(countGuest > countHome){
        return winner.textContent = "The leading team is GUEST";
    }else{
        return winner.textContent = "Both the teams are having the same score"
    }
}
function add1(){
    countHome += 1;
    scoreHome.textContent = countHome;
    whoWins()
}

function add2(){
    countHome += 2;
    scoreHome.textContent = countHome;
    whoWins()
}

function add3(){
    countHome += 3;
    scoreHome.textContent = countHome;
    whoWins()
}

function addition1(){
    countGuest += 1;
    scoreGuest.textContent = countGuest;
    whoWins()
}

function addition2(){
    countGuest += 2;
    scoreGuest.textContent = countGuest;
    whoWins()
}

function addition3(){
    countGuest += 3;
    scoreGuest.textContent = countGuest;
    whoWins()
}


function newGame(){
    countHome = 0;
    countGuest = 0;
    scoreHome.textContent = 0;
    scoreGuest.textContent = 0;
    winner.textContent = "Start the game to see who is winning";
}