let score = localStorage.getItem('quizScore');
console.log('Score retrieved from localStorage:', score);


if (score !== null && score !== undefined) {
    afficherResultat();
} else {
    console.error('Score not found in localStorage');
}

function afficherResultat (){
    console.log('afficherResultat function called');
    let scoreAfficher = document.querySelector(".resultat");
    let image = document.querySelector(".img");
    let resultat = (score / 16)* 100;

    if( score > 12 ){
        let display = '<span> Congratulation <p> Score is:'+resultat+' % </p> </span>';
        scoreAfficher.innerHTML = display;
        image.src = "/media/happy.gif";
    }else{
        let display = '<span style="color: red;" > Oooooooooops!!! <p> Score is: '+resultat+' % </p> </span>';
        scoreAfficher.innerHTML = display;
        image.src = "/media/anger.gif";
    }
}

let finishBtn = document.getElementById('btn');

finishBtn.onclick = () =>{
    window.location.href = "home.html";
}


