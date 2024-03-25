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

        if(time < 0){
            clearInterval(setInterval(updateTimer, 1000));
            timer.textContent="00";
        }
    }




// Fonction pour mettre à jour la barre de progression
    function updateProgressBar() {
        const progressBar = document.querySelector('.progress-bar');
        const currentProgress = parseInt(progressBar.style.width) || 0;
        const newProgress = Math.min(currentProgress + (100 / 16), 100); 
        progressBar.style.width = newProgress + '%';
        progressBar.textContent = Math.round(newProgress) + '%'; 
    }

 // Fonction pour vérifier si l'utilisateur a répondu à la question:
 let userAnswered = false;


function checkUserAnswer() {
    const suggestAnswer = document.querySelectorAll(".text");
    for (let i = 0; i < suggestAnswer.length; i++) {
        if (!suggestAnswer[i].classList.contains("disabled")) {
            // L'utilisateur n'a pas répondu à la question
            alert("Veuillez répondre à la question avant de passer à la suivante.");
            return false;
        }
    }
    return true;
}

// Ajoutez un écouteur d'événements au bouton "Suivant"
const suivantBtn = document.getElementById('suivantBtn');
suivantBtn.addEventListener('click', updateProgressBar);


let i = 0;
let counterQuestion = 1;
let score = 0;

suivantBtn.onclick = () => {
    // Vérifier si l'utilisateur a répondu à la question actuelle
    if (!checkUserAnswer()) {
        return; 
    }

    if (i < Questions.length - 1) {
        i++;
        counterQuestion++;
        afficherQuestions(i);
        countNumberQuestion(counterQuestion);
        // Réinitialiser la variable pour la prochaine question
        userAnswered = false;
    } else {
        suivantBtn.style.display = "none";
        console.log("finiitoooooooo");
        window.location.href = "resultat.html"; 
    }
};
   /* suivantBtn.onclick = () => {
        if (i < Questions.length - 1){
            i++;
            counterQuestion ++;
            afficherQuestions(i);
            countNumberQuestion(counterQuestion);
        }else{
            suivantBtn.style.display ="none"
            console.log("finiitoooooooo");
            window.location.href = "resultat.html";
        }
    }*/




    function afficherQuestions(index){
        let question = document.querySelector(".question");
        let suggest = document.querySelector(".reponse");
        let qstAfficher = '<h5>'+Questions[index].question+'</h5>';
        
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
        let suggestAnswer = document.querySelectorAll(".text");

        
        if( userReponse == monReponse ){
        score +=1;
        localStorage.setItem('quizScore', score);
        console.log("correcte");
        reponse.classList.add("correcte");
        }else{
            console.log("non");
            reponse.classList.add("incorrecte");

            for(let i = 0 ; i< suggestAnswer.length; i++){             
                if(suggestAnswer[i].textContent == monReponse ){
                    suggestAnswer[i].classList.add("correcte");
                }
            }
        }

        for(let i = 0 ; i< suggestAnswer.length; i++){
            suggestAnswer[i].classList.add("disabled");
        }

        

        

    }


afficherQuestions(0);
countNumberQuestion(1);


    function countNumberQuestion(index){
        let questionNumber = document.querySelector(".totalQuesion");
        let questionNumberAfficher = '<label class="qstNumber mb-3 pl-5" for="Quesion out of">Question <span>'+index+'</span> out of <span>'+Questions.length+'</span> </label>';
        questionNumber.innerHTML=questionNumberAfficher;
    }


    function afficherResultat (){

        let scoreAfficher = document.querySelector(".result");

        if( score > 12 ){
            let resultat = (score / 16)* 100;
            scoreAfficher.innerHTML = 'Score :<span class="result">'+ resultat+'%</span>'
        }
    }


  