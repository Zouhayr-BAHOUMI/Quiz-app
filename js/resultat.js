let score = localStorage.getItem('quizScore');
console.log('Score retrieved from localStorage:', score);


if (score !== null && score !== undefined) {
    afficherResultat();
} else {
    console.error('Score not found in localStorage');
}

function afficherResultat (){
    console.log('afficherResultat function called');
    let scoreAfficher = document.querySelector("h3.result");

    if( score > 12 ){
        let resultat = (score / 16)* 100;
        scoreAfficher.innerHTML = 'Score :<span >'+ resultat+'%</span>'
    }
}

