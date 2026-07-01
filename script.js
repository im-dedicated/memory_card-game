let fruits = ["🍎","🍌","🍇","🍓","🥝","🍍","🍉","🍒"];

let cards = [];
for(let i = 0; i < fruits.length; i++){
    cards.push(fruits[i]);
}
for(let i = 0; i < fruits.length; i++){
    cards.push(fruits[i]);
}

let card1 = null;
let card2 = null;
let moves = 0;
let count = 0;
let lock = false;

function start(){
    cards = [];

    for(let i = 0; i < fruits.length; i++){
        cards.push(fruits[i]);
    }

    for(let i = 0; i < fruits.length; i++){
        cards.push(fruits[i]);
    }

    for(let i = 0; i < cards.length; i++){
        let random = Math.floor(Math.random() * cards.length);

        let temp = cards[i];
        cards[i] = cards[random];
        cards[random] = temp;
    }

    let board = document.getElementById("board");
    board.innerHTML = "";

    moves = 0;
    count = 0;

    document.getElementById("moves").innerHTML = moves;

    card1 = null;
    card2 = null;
    lock = false;

    for(let i = 0; i < cards.length; i++){

        let div = document.createElement("div");

        div.className = "card";

        div.innerHTML = cards[i];

        div.setAttribute("data-fruit", cards[i]);

        div.onclick = flipCard;

        board.appendChild(div);
    }
}

function flipCard(){

    if(lock == false){

        if(this.classList.contains("flip") == false){

            this.classList.add("flip");

            if(card1 == null){

                card1 = this;

            }
            else{

                card2 = this;

                moves++;
                document.getElementById("moves").innerHTML = moves;

                if(card1.getAttribute("data-fruit") == card2.getAttribute("data-fruit")){

                    card1.classList.add("match");
                    card2.classList.add("match");

                    count++;

                    card1 = null;
                    card2 = null;

                    if(count == 8){

                        setTimeout(function(){

                            alert("Congratulations! You Won.");

                        },300);

                    }

                }
                else{

                    lock = true;

                    setTimeout(function(){

                        card1.classList.remove("flip");
                        card2.classList.remove("flip");

                        card1 = null;
                        card2 = null;

                        lock = false;

                    },1000);

                }

            }

        }

    }

}

start();
