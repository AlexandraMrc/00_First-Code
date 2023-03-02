var today = new Date();
document.getElementById("datetime").innerHTML=today;

function check_1() {
    var verifica = document.quiz.raspuns_1.value;
    if (verifica == "Liviu Rebreanu")
    alert("Corect!")
        if (verifica == "" || verifica == null) {
            alert("Spatiul nu poate fi lasat gol");
        }
    
    else {
        alert("Mai incearca!")
    }
}

function check_2() {
    var verifica = document.quiz.raspuns_2.value;
    if (verifica == "Enigma Otiliei")
    alert("Corect!")
        if(verifica == "" || verifica == null){
            alert("Spatiul nu poate fi lasat gol!")
        }
    else {
        alert("Mai incearca!")
    }
}

function check_3() {
    var verifica = document.quiz.maiorescu.value;
    if (verifica == "critic literar")
    alert("Corect!")
    else {
        alert("Mai incearca!")
    }
}

function check_4() {
    var verifica = document.quiz.autor1.value;
    if (verifica == "value1")
    alert("Corect!")
    else {
        alert("Mai incearca!")
    }
}

function check_5() {
    var verifica = document.getElementById("emily"); 
    if (verifica.checked == true)
    alert("Corect!")
    else {
        alert("Mai incearca!")
    }
}


function check_age() {
    var verifica = document.varsta.varsta.value;
    verifica = parseInt(verifica);
    if (verifica >= 15) 
        alert('Poti sustine testul!')
    else {
        var yearsLeft = 15 - varsta;
        alert('Mai asteapta pana la 15 ani!')
    }
}

function check_6() {
    var verifica = document.quiz.daSauNu.value;
    if (verifica == "da")
    alert("Corect!")
    else 
    if (verifica == "nu"){
    alert("Incorect")
        }
}