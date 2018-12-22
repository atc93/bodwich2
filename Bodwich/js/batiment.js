var mine = {
  niveau:1,
  prixBase:10,
  isUpdating:false,
  tempsUpdateBase:10,
  tempsUpdateCurrent:10,
};

var timerMine;

$(document).ready(function(){
    document.getElementById("prixMine").innerHTML = mine.prixBase*mine.niveau;
    document.getElementById("niveauMine").innerHTML = mine.niveau;    
    }
);



//mettre tout le chargement de la page dans une fonction
$(document).ready(function(){
    if (mine.isUpdating) {
    document.getElementById("buttonStateBat").innerHTML = "En cours";
    }
else {
    document.getElementById("buttonStateBat").innerHTML = "Améliorer";
    document.getElementById("progressMine").style.display="none";
}
}
);


    // // à mettre dans une fonction début de partie
    // var timerMine = setInterval(goldIncome, 3000);

    // function goldIncome()
    // {
    //     $(document).ready(goldIncomeReady);    
    // }

    // function goldIncomeReady()
    // {
    //     gold=gold+mine.niveau;
    //     document.getElementById("gold").innerHTML = "Or : "+gold; 
    // }



function augmenterMine() {
    mine.isUpdating = true;    
    document.getElementById("progressMine").style.display="block";
    timerMine = setInterval(decSeconds, 1000);
    //console.log("Fonction augmenterMine, niveau de la mine : "+mine.niveau);
    gold=gold-mine.prixBase;
    document.getElementById("gold").innerHTML = "Or : "+gold; 
    document.getElementById("buttonStateBat").innerHTML = "En cours : " + mine.tempsUpdateCurrent;    
    console.log("Timer de la mine : "+ mine.tempsUpdateCurrent);
    //setTimeout(augmenteMineFin,mine.tempsUpdateCurrent*1000);
}


function augmenteMineFin()
{
    mine.isUpdating = false;
    document.getElementById("buttonStateBat").innerHTML = "Améliorer";
    document.getElementById("progressMine").style.display="none";
    mine.niveau++; 
    mine.tempsUpdateCurrent = mine.tempsUpdateBase*mine.niveau;
}

function augmenterMineReady(){
    if (!mine.isUpdating){
    $(document).ready(augmenterMine);
}
}



function decSeconds() {    
    if (mine.tempsUpdateCurrent > 1) {
    mine.tempsUpdateCurrent = mine.tempsUpdateCurrent-1;
    document.getElementById("buttonStateBat").innerHTML = "En cours : " + mine.tempsUpdateCurrent;    
}
else {
    augmenteMineFin();
    clearInterval(timerMine);
    document.getElementById("prixMine").innerHTML = mine.prixBase*mine.niveau;
    document.getElementById("niveauMine").innerHTML = mine.niveau;
}
}


