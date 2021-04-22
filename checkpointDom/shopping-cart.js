let buttonPlus = document.getElementByClassName("afa-plus");

for(let btnAdd of buttonPlus){
    btnAdd.addEventListener("click", function() {
        btnAdd.nextElementsibling.innerHTML++
    })
}

let hearts = document.getElementsByClassName("fa-heart");

for (let heart of hearts) {
    heart.addEventListener("click", function () {
heart.classList.toggle("red");
    })
}

let buttonPlus = document.getElementsByClassName("fa-plus");
console.log(buttonPlus);
for (let btnAdd of buttonPlus) {
  btnAdd.addEventListener("click", function () {
    btnAdd.parentElement.nextElementSibling.value++;
  });
}

let hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts) {
    heart.addEventListener("click", function () {
heart.classList.toggle("red");
    })
}
alert("hello");
let hearts = document.getElementsByClassName("fa-heart");
console.log(hearts);
function sum() {
    let prices = document.getElementsByClassName("price");
    let qtes = document.getElementsByClassName("qte");
    let sum = 0;

    for(let i=0; i < prices.length; i++) {
        sum += prices[i].innerHTML * qtes[i].innerHTML;

    }

    return (document.getElementById("totalp").innerHTML = "Shopping Bag total : $" +sum);
}