let countHome = 0;
let countGuest = 0
let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let winner = document.getElementById("winner")

function whoWins(){
    if(countHome > countGuest){
        return winner.textContent += "Home"
    }else if(countGuest > countHome){
        return winner.textContent += "Guest"
    }else{
        return winner.textContent = "Both have Same Score"
    }
}
function add1(){
    countHome += 1;
    scoreHome.textContent = countHome;
    

}

function add2(){
    countHome += 2;
    scoreHome.textContent = countHome;
}

function add3(){
    countHome += 3;
    scoreHome.textContent = countHome;
}

function addition1(){
    countGuest += 1;
    scoreGuest.textContent = countGuest;
}

function addition2(){
    countGuest += 2;
    scoreGuest.textContent = countGuest;
}

function addition3(){
    countGuest += 3;
    scoreGuest.textContent = countGuest;
}


function newGame(){
    countHome = 0;
    countGuest = 0;
    scoreHome.textContent = 0;
    scoreGuest.textContent = 0;
}