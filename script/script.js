const reset = document.getElementById("reset");

const jeu = document.querySelectorAll(".btn-jeu");

let choix;
let choixIA;

for(let i = 0; i < jeu.length; i++){
    jeu[i].addEventListener("click",()=>{
        choix = jeu[i].textContent;
        choixIA = Math.floor(Math.random() * 3);
        console.log("Choix de l'IA : " + choixIA);
        switch(choix){
            case "Pierre":
                if(choixIA == 0){
                    egalite(choix);
                } else if(choixIA == 1){
                    perdre(choix, choixIA);
                } else {
                    gagner(choix, choixIA);
                }
                break;
            case "Feuille":
                if(choixIA == 0){
                    gagner(choix, choixIA);
                } else if(choixIA == 1){
                    egalite(choix);
                } else {
                    perdre(choix, choixIA);
                }
                break;
            case "Ciseaux":
                if(choixIA == 0 ){
                    perdre(choix, choixIA);
                } else if(choixIA == 1){
                    gagner(choix, choixIA);
                } else {
                    egalite(choix);
                }
                break;
        }
        total++;
        updateScore(win,lose,draw);
    })
}

let win = 0;
let lose = 0;
let draw = 0;
let total = 0;

function updateScore(w,l,d) {
    document.getElementById("win").textContent = w;
    document.getElementById("lose").textContent = l;
    document.getElementById("draw").textContent = d;
    document.getElementById("total").textContent = total;
}

function gagner(joueur, ia) {
    document.getElementById("result").textContent = "Vous avez gagné ! "+joueur+" gagne contre "+choixIAtoString(ia)+".";
    win++;
}

function perdre(joueur, ia) {
    document.getElementById("result").textContent = "Vous avez perdu ! "+joueur+" perd contre "+choixIAtoString(ia)+".";
    lose++;
}

function egalite(joueur) {
    document.getElementById("result").textContent = "Egalité ! Vous avez tous les deux choisi " + joueur + ".";
    draw++;
}

function choixIAtoString(choixIA) {
    switch(choixIA){
        case 0:
            return "Pierre";
        case 1:
            return "Feuille";
        case 2:
            return "Ciseaux";
    }
}

reset.addEventListener("click",()=>{
    win = 0;
    lose = 0;
    draw = 0;
    total = 0;
    updateScore(0,0,0);
    document.getElementById("result").textContent = "";
})
