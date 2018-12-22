var doctrines = ["Capitalisme", "Communisme", "Anarchisme", "Physiocratie", "Monarchisme", "Panaliénisme", "Douchoridisme"];
//Var tirage pour retirer de la liste pour eviter les doubloins mais en fait plus besoin changement de methode
var tiragePol = ["Capitalisme", "Communisme", "Anarchisme", "Physiocratie", "Monarchisme", "Panaliénisme", "Douchoridisme"];
var doctrinePolitiqueAdopt;


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function tiragePolitique(){
	var polAleaTirage1 = getRandomInt(tiragePol.length);
	document.getElementById("politAleat1").innerHTML = tiragePol[polAleaTirage1];		
	var polAleaTirage2 = getRandomInt(tiragePol.length);
	while (polAleaTirage1==polAleaTirage2) {polAleaTirage2 = getRandomInt(tiragePol.length);}
	document.getElementById("politAleat2").innerHTML = tiragePol[polAleaTirage2];	
	var polAleaTirage3 = getRandomInt(tiragePol.length);
	while (polAleaTirage3==polAleaTirage2 || polAleaTirage3==polAleaTirage2) {polAleaTirage3 = getRandomInt(tiragePol.length);}
	document.getElementById("politAleat3").innerHTML = tiragePol[polAleaTirage3];
}

$(document).ready(tiragePolitique);    


function submitCreation(){
	doctrinePolitiqueAdopt = document.getElementById("doctrinePolitiqueAdopt").value;
	console.log("Enregistrement doctrine : " + doctrinePolitiqueAdopt);
	document.getElementById("recapPolitique").innerHTML = "Vous avez choisi d'appartenir au mouvement : " + doctrinePolitiqueAdopt;
	document.getElementById("recapRace").innerHTML = "Vous avez choisi d'incarner la race : ";
}


function submitCreationReady(){
	$(document).ready(submitCreation);
}

