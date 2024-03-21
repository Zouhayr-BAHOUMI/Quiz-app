var timer;
var element= document.getElementsByClassName('.clock');
(function() {
var sec= 0;
timer = setInterval(()=>{
element.innerHTML='00:'+sec;
sec++;
},1000 )
})()




function afficherQuestions(){
    let question = document.querySelector(".question");
    let qstAfficher = '<h2>'+Questions[0].question+'</h2>';
    question.innerHTML = qstAfficher;

}

afficherQuestions();