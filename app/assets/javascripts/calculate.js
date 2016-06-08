function update(){

	var a1 = Number(document.getElementById("a1").value);
   	var a2 = Number(document.getElementById("a2").value);
   	var b1 = Number(document.getElementById("b1").value);
  	var b2 = Number(document.getElementById("b2").value);
   	var c1 = Number(document.getElementById("c1").value);
   	var c2 = Number(document.getElementById("c2").value);
   	var d1 = Number(document.getElementById("d1").value);
   	var d2 = Number(document.getElementById("d2").value);
   	
	if(!a2 || !a1 || a2 == 0){
   		console.log("Test");
   		document.getElementById("ans1").innerHTML = "-";
   	}else{
   		document.getElementById("ans1").innerHTML = a1/a2 * 100 + "%";
   	}
   	
   	if(!b2 || !b1 || b2 == 0){
   		document.getElementById("ans2").innerHTML = "-";
   	}else{
   		document.getElementById("ans2").innerHTML = b1/b2 * 100 + "%";
   	}
   	
   	if(!c2 || !c1 || c2 == 0){
   		document.getElementById("ans3").innerHTML = "-";
   	}else{
   		document.getElementById("ans3").innerHTML = c1/c2 * 100 + "%";
   	}
   	
   	if(!d2 || !d1 || d2 == 0){
   		document.getElementById("ans4").innerHTML = "-";
   	}else{
   		document.getElementById("ans4").innerHTML = d1/d2 * 100 + "%";
   	}

}

function average() {
//Calculates average of total grades meaning numsSigma / denumsSigma
   	var a1 = Number(document.getElementById("a1").value);
   	var a2 = Number(document.getElementById("a2").value);
   	var b1 = Number(document.getElementById("b1").value);
   	var b2 = Number(document.getElementById("b2").value);
   	var c1 = Number(document.getElementById("c1").value);
   	var c2 = Number(document.getElementById("c2").value);
   	var d1 = Number(document.getElementById("d1").value);
   	var d2 = Number(document.getElementById("d2").value);
   	
   	var ret = (a1+b1+c1+d1)/(a2+b2+c2+d2) * 100;
   	//console.log(ret); //Log Test
   	
   	document.getElementById("result").innerHTML = ret + "%";
   	if(ret < 51){
   		var audio = new Audio('siren.mp3');
		audio.play();
   	}else{
   		var audio = new Audio('music.mp3');
		audio.play();
   	}
   	
   	return;
}

function mean() {
//Calculates average of total grades meaning [nums/denums]Sigma/#OfDenums
   	var a1 = Number(document.getElementById("a1").value);
   	var a2 = Number(document.getElementById("a2").value);
   	var b1 = Number(document.getElementById("b1").value);
  	var b2 = Number(document.getElementById("b2").value);
   	var c1 = Number(document.getElementById("c1").value);
   	var c2 = Number(document.getElementById("c2").value);
   	var d1 = Number(document.getElementById("d1").value);
   	var d2 = Number(document.getElementById("d2").value);
   	
   	var den1,den2,den3,den4 = 1;
   
   	if(!a2){
   		a2 = 0;
   		den1 = 1;
   	}else{
   		den1 = a2;
   		a2 = 1;
   	}
   	
   	if(!b2){
   		b2 = 0;
   		den2 = 1;
   	}else{
   		den2 = b2;
   		b2 = 1;
   	}
   	
   	if(!c2){
   		c2 = 0;
   		den3 = 1;
   	}else{
   		den3 = c2;
   		c2 = 1;
   	}
   	
   	if(!d2){
   		d2 = 0;
   		den4 = 1;
   	}else{
   		den4 = c2;
   		d2 = 1;
   	}
   	
   	var denom = (a1/den1+b1/den2+c1/den3+d1/den4);
   	
   	console.log(a2+b2+c2+d2);
   	
   	var ret = (denom)/(a2+b2+c2+d2) * 100;
   	
   	//console.log(ret); //Log Test
   	document.getElementById("result").innerHTML = ret + "%";
   	if(ret < 51){
   		var audio = new Audio('siren.mp3');
		audio.play();
   	}else{
   		var audio = new Audio('music.mp3');
		audio.play();
   	}
   	
    return; // add this somewhere or alert it
}

//*MAIN*//
//console.log("Test"); //Log Test

//PercentageLoop

	//Declarations
	
   
//onClicks
document.getElementById('avg').onclick=average;
document.getElementById('mean').onclick=mean;
   	
//blurs 
document.getElementById("a1").addEventListener("blur", update);
document.getElementById("a2").addEventListener("blur", update);
document.getElementById("b1").addEventListener("blur", update);
document.getElementById("b2").addEventListener("blur", update);
document.getElementById("c1").addEventListener("blur", update);
document.getElementById("c2").addEventListener("blur", update);
document.getElementById("d1").addEventListener("blur", update);
document.getElementById("d2").addEventListener("blur", update);
   	
  




