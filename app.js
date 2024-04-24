let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green","purple"];

let started  = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress" ,function(){
    if(started == false){

        console.log("game stared");
        started == true;

        levelUp();

    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 350)

}


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 350)

}

function levelUp(){
    level++;
    h2.innerText =`Level ${level}`;

    let randIdx  = Math.floor(Math.random() *4);
    let randColor = btns[randIdx];
    let randBtn  = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    btnFlash(randBtn);
}


function btnPress(){
    let btn = this;
    userFlash(btn);
};

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);

};