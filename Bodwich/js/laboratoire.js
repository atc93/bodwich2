
var laboratoire = {
    niveau:1,
    prixBase:50000,
    tempsUpdateBase:10,
    tempsUpdateCurrent:10,
}

$(document).ready(function(){
    document.getElementById("prixLabo").innerHTML = laboratoire.prixBase*laboratoire.niveau;
    document.getElementById("niveauLabo").innerHTML = laboratoire.niveau;
    document.getElementById("buttonStateLabo").innerHTML = "Améliorer";    
    }
);



function augmenterLaboReady(){
    $(document).ready(augmenterLabo);    
}

function augmenterLabo() {           
    gold=gold-laboratoire.prixBase;
    document.getElementById("gold").innerHTML = "Or : "+gold;
    timerLabo = setInterval(decSecondsLabo, 1000);
}


function decSecondsLabo() {    
    if (laboratoire.tempsUpdateCurrent > 1) {
    laboratoire.tempsUpdateCurrent = laboratoire.tempsUpdateCurrent-1;
    document.getElementById("buttonStateLabo").innerHTML = "En cours : " + laboratoire.tempsUpdateCurrent;    
}
else {
    augmenteLaboFin();
    clearInterval(timerLabo);
    document.getElementById("prixLabo").innerHTML = laboratoire.prixBase*laboratoire.niveau;
    document.getElementById("niveauLabo").innerHTML = laboratoire.niveau;
}
}


function augmenteLaboFin()
{
    laboratoire.isUpdating = false;
    document.getElementById("buttonStateLabo").innerHTML = "Améliorer";    
    laboratoire.niveau++; 
    laboratoire.tempsUpdateCurrent = laboratoire.tempsUpdateBase*laboratoire.niveau;
}

function recruterChercheur()
{
	var table = document.getElementById("tableChercheur");

	var row = table.insertRow(-1);

	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);

	cell1.innerHTML = 'Boris';
	cell2.innerHTML = 1;
	cell3.innerHTML = "";
	cell4.innerHTML = '<button>Affecter un sujet</button>'

}