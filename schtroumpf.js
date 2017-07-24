var score = 0;
var multi = 1;
var autoclc= 1;
var bonus = 200;
var temps = 30;
var clic = 0;

var price = 25;
var autoprice = 500;
var bonusprice = 50;

var cliqueur = document.getElementById('clic');
var display = document.getElementById('display');
var multiplier= document.getElementById('multiplier');
var bonus1= document.getElementById("bonus");


function affichageScore() {
    score = score + multi + clic;

    document.getElementById("display").innerHTML = score;

}

function delaisCliqueur() {
    IntervalID = setInterval(autoCliqueur, 10000);
}

function autoCliqueur() {
    score = score + autoclc;
    document.getElementById("display").innerHTML = score;

}

function augmenterMultiplicateur() {
    if (score >= price) {
    score = score - price;
    document.getElementById("display").innerHTML = score; 
     multi = multi + 1;
     document.getElementById("multiplier").innerHTML = "x" + multi + '( Multi Suivant: ' + price * 2 + ')';
    price = price * 2;
    document.GetElementById("display").innerHTML = score;
} else {
    alert("Pas de Schtroumpfs !")
}
}


function achatCliqueur() {
    if (score >= autoprice) {
    score = score - autoprice;
    document.getElementById("display").innerHTML = score;
    autoprice = autoprice + 100;
    document.getElementById("autocliqueur").innerHTML = "Autocliqueur à " + autoprice + " Schtroumpfs !";
    delaisCliqueur();
    if (score < autoprice) {
    document.getElementById("autocliqueur").disabled = true;
} else {
    document.getElementById("autocliqueur").disabled = false;
}
}else {
    alert("Pas de Schtroumpfs !")
}
}

function enclencheBonus() {
    if (score >= bonusprice) {
    score = score - bonusprice;
    document.getElementById("display").innerHTML = score;
    var old_contenu = multi.firstChild();
    multi += 200;
    temps = 30;
    bonus1.disabled=true;
    bonusRetire();
    IntervalID = setInterval(bonusRetire, 1000);
    
} else {
    alert("Pas de Schtroumpfs !")
}
}

function bonusRetire() {

    if (temps === 0) {
        multi = old_contenu;
        document.getElementById("bonus".innerHTML) = 'Prix : ' + bonusprice + 'Schtroumpfs';
        retireur();
        clearInterval(IntervalID);
    } else {

        --temps;
        document.getElementById("display2").innerHTML = 'Temps: ' + temps + ' sec)';
    
    }
}

function retireur() {
     if (score >= bonusprice) {
    bonus1.disabled = false
    } else {
        bonus1.disabled=true;
    }
}


