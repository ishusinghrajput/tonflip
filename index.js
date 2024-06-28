
let flipbtn = document.getElementById("flipbtn");

let heads = 0;
let tails = 0;


function flipbtnclick(){
    let i = Math.floor(Math.random() *2);

    let coin = document.getElementById("coin");
    coin.style.animation = "none";

    if(i) {
        setTimeout(headsanim , 100);
        heads++
    }
    else{
        setTimeout(tailsanim , 100);
        tails++
    }

    setTimeout(updateStats , 3000);
    disableButton();

    function headsanim(){
        let coin = document.getElementById("coin");
        coin.style.animation = "spin-heads 3s forwards";
    }

    function tailsanim(){
        let coin = document.getElementById("coin");
        coin.style.animation = "spin-tails 3s forwards";
    }

    function updateStats(){

    }
    
    function disableButton(){
        flipbtn = document.getElementById("flipbtn");
        flipbtn.disabled = true;
        setTimeout(function(){
            flipbtn.disabled = false;
        },3000)
    }
}
