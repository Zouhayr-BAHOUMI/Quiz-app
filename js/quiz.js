const stratTimer = 15;
let time = stratTimer * 60;
const timer = document.getElementById('timinig');
setInterval(updateTimer, 1000);
function updateTimer () {
const minutes = Math.floor(time/60);
let seconds = time % 60;
seconds = seconds < 10 ? '0' + seconds : seconds;
timer.innerHTML =`${minutes}:${seconds}`;
time--;
}




// Fonction pour mettre à jour la barre de progression
function updateProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    const currentProgress = parseInt(progressBar.style.width) || 0;
    const newProgress = Math.min(currentProgress + (100 / 16), 100); 
    progressBar.style.width = newProgress + '%';
    progressBar.textContent = Math.round(newProgress) + '%'; 
}

// Ajoutez un écouteur d'événements au bouton "Suivant"
const suivantBtn = document.getElementById('suivantBtn');
suivantBtn.addEventListener('click', updateProgressBar);


let i = 0;
let counterQuestion = 1;
suivantBtn.onclick = () => {
    if (i < Questions.length - 1){
        i++;
        counterQuestion ++;
        afficherQuestions(i);
        countNumberQuestion(counterQuestion);
    }else{
        console.log("finiitoooooooo")
    }
}




function afficherQuestions(index){
    let question = document.querySelector(".question");
    let suggest = document.querySelector(".reponse");
    let qstAfficher = '<h2>'+Questions[index].question+'</h2>';
    let suggestAfficher = '<div class="input rounded-5 border p-3 mb-4"><span class="text ms-3">'+Questions[index].sugguestion[0]+'</span></div>'
                           +'<div class="input rounded-5 border p-3 mb-4"><span class="text ms-3">'+Questions[index].sugguestion[1]+'</span></div>'
                           +'<div class="input rounded-5 border p-3 mb-4"><span class="text ms-3">'+Questions[index].sugguestion[2]+'</span></div>'
                           +'<div class="input rounded-5 border p-3 mb-4"><span class="text ms-3">'+Questions[index].sugguestion[3]+'</span></div>';
    question.innerHTML = qstAfficher;
    suggest.innerHTML = suggestAfficher;

    let suggestAnswer = suggest.querySelectorAll(".text");
    for(let i=0; i<suggestAnswer.length; i++){
        suggestAnswer[i].setAttribute("onclick", "determinerAnswer(this)");
    }

}

function determinerAnswer(reponse){
    let userReponse = reponse.textContent;
    let monReponse = Questions[i].reponse;
    if( userReponse == monReponse ){
       console.log("correcte");
    }else{
        console.log("non");
    }
}


afficherQuestions(0);
countNumberQuestion(1);


function countNumberQuestion(index){
    let questionNumber = document.querySelector(".totalQuesion");
    let questionNumberAfficher = '<label class="qstNumber mb-3 pl-5" for="Quesion out of">Question <span>'+index+'</span> out of <span>'+Questions.length+'</span> </label>';
    questionNumber.innerHTML=questionNumberAfficher;
}


