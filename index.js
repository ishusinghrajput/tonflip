



let flipbtn = document.getElementById("flipbtn");

let heads = 0;
let tails = 0;
let optionselected = 1;
let amountselected = 0.25;


async function bettransaction(){
    const transaction = {
  messages: [
    {
        address: "UQDx4nLudgg-yWp6tWcG0EGCM-6dA8DBoLDuicnUzNNvhyzp", // destination address
        amount: amountselected * 1000000000 //Toncoin in nanotons
    }
   ]
  }

  const result = await tonConnectUI.sendTransaction(transaction)
  alert("Transaction complete");
  flipbtnclick();
}


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
        if(i == optionselected){
            alert("You Won! DOUBLED")
        }
        else{
            alert("You Lost! Rugged")
        }
    }
    
    function disableButton(){
        flipbtn = document.getElementById("flipbtn");
        flipbtn.disabled = true;
        setTimeout(function(){
            flipbtn.disabled = false;
        },3000)
    }
}


function headsbtnclick(){
    tailsbtn = document.getElementById("tailsbtn");
    tailsbtn.style.border = "none" ;
    headsbtn = document.getElementById("headsbtn");
    headsbtn.style.border = "5px solid #fff" ;
    optionselected = 1;
}

function tailsbtnclick(){
    headsbtn = document.getElementById("headsbtn");
    headsbtn.style.border = "none" ;
    tailsbtn = document.getElementById("tailsbtn");
    tailsbtn.style.border = "5px solid #fff" ;
    optionselected = 0;
}

function amount1click(){
    amount1 = document.getElementById("amount1");
    amount2 = document.getElementById("amount2");
    amount3 = document.getElementById("amount3");
    amount4 = document.getElementById("amount4");
    amount5 = document.getElementById("amount5");
    amount6 = document.getElementById("amount6");
    amount1.style.border = "none" ;
    amount2.style.border = "none" ;
    amount3.style.border = "none" ;
    amount4.style.border = "none" ;
    amount5.style.border = "none" ;
    amount6.style.border = "none" ;
    amount1.style.border = "5px solid #fff" ;
    amountselected = 0.25;
}

function amount2click(){
    amount1 = document.getElementById("amount1");
    amount2 = document.getElementById("amount2");
    amount3 = document.getElementById("amount3");
    amount4 = document.getElementById("amount4");
    amount5 = document.getElementById("amount5");
    amount6 = document.getElementById("amount6");
    amount1.style.border = "none" ;
    amount2.style.border = "none" ;
    amount3.style.border = "none" ;
    amount4.style.border = "none" ;
    amount5.style.border = "none" ;
    amount6.style.border = "none" ;
    amount2.style.border = "5px solid #fff" ;
    amountselected = 0.50;
}

function amount3click(){
    amount1 = document.getElementById("amount1");
    amount2 = document.getElementById("amount2");
    amount3 = document.getElementById("amount3");
    amount4 = document.getElementById("amount4");
    amount5 = document.getElementById("amount5");
    amount6 = document.getElementById("amount6");
    amount1.style.border = "none" ;
    amount2.style.border = "none" ;
    amount3.style.border = "none" ;
    amount4.style.border = "none" ;
    amount5.style.border = "none" ;
    amount6.style.border = "none" ;
    amount3.style.border = "5px solid #fff" ;
    amountselected = 1;
}

function amount4click(){
    amount1 = document.getElementById("amount1");
    amount2 = document.getElementById("amount2");
    amount3 = document.getElementById("amount3");
    amount4 = document.getElementById("amount4");
    amount5 = document.getElementById("amount5");
    amount6 = document.getElementById("amount6");
    amount1.style.border = "none" ;
    amount2.style.border = "none" ;
    amount3.style.border = "none" ;
    amount4.style.border = "none" ;
    amount5.style.border = "none" ;
    amount6.style.border = "none" ;
    amount4.style.border = "5px solid #fff" ;
    amountselected = 2;
}

function amount5click(){
    amount1 = document.getElementById("amount1");
    amount2 = document.getElementById("amount2");
    amount3 = document.getElementById("amount3");
    amount4 = document.getElementById("amount4");
    amount5 = document.getElementById("amount5");
    amount6 = document.getElementById("amount6");
    amount1.style.border = "none" ;
    amount2.style.border = "none" ;
    amount3.style.border = "none" ;
    amount4.style.border = "none" ;
    amount5.style.border = "none" ;
    amount6.style.border = "none" ;
    amount5.style.border = "5px solid #fff" ;
    amountselected = 5;
}

function amount6click(){
    amount1 = document.getElementById("amount1");
    amount2 = document.getElementById("amount2");
    amount3 = document.getElementById("amount3");
    amount4 = document.getElementById("amount4");
    amount5 = document.getElementById("amount5");
    amount6 = document.getElementById("amount6");
    amount1.style.border = "none" ;
    amount2.style.border = "none" ;
    amount3.style.border = "none" ;
    amount4.style.border = "none" ;
    amount5.style.border = "none" ;
    amount6.style.border = "none" ;
    amount6.style.border = "5px solid #fff" ;
    amountselected = 10;
}
