
let buttonPlus = document.querySelectorAll('.add');

for (let btnAdd of buttonPlus) {
    btnAdd.addEventListener("click", function () {
      btnAdd.parentElement.nextElementSibling.value++;
      sum();
      rowSum();
    });
  }

  let hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts) {
    heart.addEventListener("click", function () {
heart.classList.toggle("red");
    })
}

let buttonMinus = document.querySelectorAll('.minus-btn');

for (let btnMinus of buttonMinus) {
    btnMinus.addEventListener("click", function () {
         
        if (btnMinus.previousElementSibling.value > 0){
            btnMinus.previousElementSibling.value--; 
        }
        sum();
         
    });
  
} 
function sum() {
    let prices = document.getElementsByClassName("row-price");
    let qtes = document.getElementsByClassName("qte");
    let sum = 0;

    for(let i=0; i < prices.length; i++) {
        sum += prices[i].innerHTML * qtes[i].value;

    }

    return (document.getElementsByClassName("totalp")[0].innerHTML = sum);
} 

let buttonsRemove = document.querySelectorAll(".delete-btn");

for(let btnRemove of buttonsRemove){
    btnRemove.addEventListener("click", function () {
        btnRemove.parentElement.parentNode.remove();
        sum();
    })
}

function rowSum() {
         let prices = document.getElementsByClassName("row-price");
         let qtes = document.getElementsByClassName("qte");

for (let i=0; i < prices.length; i++){
    let p = prices[i].innerHTML;
    let priceRow = 0;
    priceRow = p * qtes[i].value;
    console.log(p = priceRow);
}
}

    
// } 


/****     La seance prochaine (Avec Mehdi) */

// function rowSum() {
//     let prices = document.getElementsByClassName("row-price");
//     let qtes = document.getElementsByClassName("qte");

//     for(let i=0; i < prices.length; i++) {
//         let p = prices[i].innerHTML;
//         let rowSum =  prices[i].innerHTML ;
//         rowSum = p * qtes[i].value;
//         // console.log(rowSum)
//        console.log(document.getElementsByClassName("row-price")[i].innerHTML = ) ; 
//     }

     

    
// } 

// console.log(rowSum())

