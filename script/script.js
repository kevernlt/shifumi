const reset = document.getElementById("reset");

const jeu = document.querySelectorAll(".btn-jeu");

let choix;

for(let i = 0; i < jeu.length; i++){
    jeu[i].addEventListener("click",()=>{
        choix = jeu[i].textContent;
    })
}

const win = 0;
const lose = 0;
const draw = 0;
const total = 0;

function updateScore(w,l,d) {
    document.getElementById("win").textContent = w;
    document.getElementById("lose").textContent = l;
    document.getElementById("draw").textContent = d;
    document.getElementById("total").textContent = total;
}

reset.addEventListener("click",()=>{
    updateScore(0,0,0);
    total = 0;
})
