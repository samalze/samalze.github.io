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


function scrollDown() { // le pb etait que le nom etait scroll() et c'est une fonction qui existe deja;)
    let vh = 100; //valeur en vh [100vh = ecran en entier en hauter] 
    let pixels = (vh * window.innerHeight) / 100// - 70; //calculer le nombre de pixels auquel vh correspond et soustraire 70 donc la taille du header replie
    window.scrollTo(0, pixels);
}

document.getElementsByClassName('arrow_carrot-down').onclick = scroll;




let openOrClosed = false;
function showMenu(){
    if(openOrClosed == false) {
        document.getElementById("menuWrapper").style.height = "100%";
        document.getElementById("menuWrapper").style.visibility = "visible";
        document.getElementById("menu").classList.add("rotateRight90");
    }
    else {
        document.getElementById("menuWrapper").style.height = "0";
        document.getElementById("menuWrapper").style.visibility = "hidden";
        document.getElementById("menu").classList.remove("rotateRight90");
    }
    openOrClosed = !openOrClosed;
}