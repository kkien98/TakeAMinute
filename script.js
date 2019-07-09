function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');
	
	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}

$( document ).ready(function() {
  var speed = 75;
  var delay = 6000;
  setTimeout(function(){
    $('p').css('display', 'inline-block');
    typeEffect($('p'), speed);
  }, delay);
});




let activeFunction =()=>{
document.getElementById('bottom').style.animation='color_change 50s linear forwards';
document.getElementById('bottom1').style.animation='color_change 50s linear forwards';
document.getElementById('top').style.animation='color_change 50s linear forwards';
document.getElementById('top1').style.animation='color_change 50s linear forwards';
document.getElementById('bottomTwo').style.animation='color_change 50s linear forwards';
document.getElementById('bottom2').style.animation='color_change 50s linear forwards';
document.getElementById('topTwo').style.animation='color_change 50s linear forwards';
document.getElementById('top2').style.animation='color_change 50s linear forwards';
document.getElementById('bottomThree').style.animation='color_change 50s linear forwards';
document.getElementById('bottom3').style.animation='color_change 50s linear forwards';
document.getElementById('topThree').style.animation='color_change 50s linear forwards';
document.getElementById('top3').style.animation='color_change 50s linear forwards';
document.getElementById('rain').style.animation='FadeOut 57s forwards ease-out';
document.getElementById('input').style.animation='FadeOut 5s forwards ease-out';
document.getElementById('centeralign').style.animation='FadeOut 3s forwards ease-out';
// document.getElementById('active').style.animation='FadeOut 5s forwards ease-out';
document.getElementById('container').style.animation='FadeOut 5s 62s forwards ease-in';
document.getElementById('active').style.animation='bounce-out-right 1.5s both';
let input= document.getElementById('input');
let text=document.getElementById('text');
text.innerText=input.value;
text.style.animation='FadeOut 5s 55s forwards ease-in';
// document.getElementById('cloud1').innerHTML='<img src="cloudnew.png" alt="" width="500" height="221.9">';
// document.getElementById('cloud1').style.animation='animate-clouds 90s ';
document.getElementById('End').style.animation='FadeIn 3s forwards ease-in ';
document.getElementById('End').style.animationDelay='67s';
document.getElementById('End').innerHTML='<div> Even if you are not beautiful, we still love you 😉 <br><br><br><br><br> From  <b><i id="teamName">WhatEver</i><b> team with love :D</div> <img src="giphy.gif" alt="" width="240" height="240">';
var vid=document.getElementById('video_background');
vid.play();





}


