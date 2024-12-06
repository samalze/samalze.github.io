document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne l'élément avec la classe "banderole"
    const banderole = document.querySelector('.banderole');
    const titre = document.querySelector('.titre_banderole');
    const lien = document.querySelector('.lien_banderole');
    // Vérifie que l'élément existe avant de continuer
    if (!banderole) {
        console.error("L'élément avec la classe 'banderole' est introuvable !");
        return;
    }

    // Ajoute l'événement de défilement
    document.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            banderole.classList.add('transparent'); // Ajoute la classe "transparent"
            titre.classList.add('taille'); // Ajoute la classe "transparent"
            lien.classList.add('taille1'); // Ajoute la classe "transparent"
            document.getElementById("menu").classList.add("makeSmaller");
        } else {
            banderole.classList.remove('transparent'); // Retire la classe "transparent"
            titre.classList.remove('taille'); // Retire la classe "transparent"
            lien.classList.remove('taille'); // Retire la classe "transparent"
            document.getElementById("menu").classList.remove("makeSmaller");
        }
    });
});


function scroll() {
    window.scroll({
        top: 2000, // Position verticale en pixels
        behavior: 'smooth' // Défilement fluide
    });
    alert("uwu");
}

document.getElementsByClassName('arrow_carrot-down').onclick = scroll;




let openOrClosed = false;
function showMenu(){
    if(openOrClosed == false) {
        document.getElementById("menuMainContainer").style.height = "100%";
        document.getElementById("menu").classList.add("rotateRight90");
    }
    else {
        document.getElementById("menuMainContainer").style.height = "0";
        document.getElementById("menu").classList.remove("rotateRight90");
    }
    openOrClosed = !openOrClosed;
}