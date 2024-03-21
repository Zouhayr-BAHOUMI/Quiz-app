var timer;
var element= document.getElementsByClassName('.clock');
(function() {
var sec= 0;
timer = setInterval(()=>{
element.innerHTML='00:'+sec;
sec++;
},1000 )
})()