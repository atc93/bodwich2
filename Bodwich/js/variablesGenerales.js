var gold = 10000;

var labConstructed = false;

$(document).ready(function(){
    document.getElementById("gold").innerHTML = "Or : "+gold;    
    }
);


// à mettre dans une fonction début de partie
    var timerMine = setInterval(goldIncome, 3000);

    function goldIncome()
    {
        $(document).ready(goldIncomeReady);    
    }

    function goldIncomeReady()
    {
        gold=gold+mine.niveau;
        console.log("Gold income 3sec :"+gold);
        document.getElementById("gold").innerHTML = "Or : "+gold; 
    }



  
