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
