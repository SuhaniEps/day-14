let fname = "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname;
}

function trivial() {
    let triviaAnswer = document.getElementById("trivial-answer");

    //get values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong.";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong.";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!"
    }
}

function game() {
    let gameAnswer = document.getElementById("game-answer");
    let truth1Selected = document.getElementById("truth1").checked;
    let truth2Selected = document.getElementById("truth2").checked;
    let lieSelected = document.getElementById("lie").checked;

    if (truth1Selected) {
        gameAnswer.innerHTML = fname + ", you are wrong.";
    }
    else if (truth2Selected) {
        gameAnswer.innerHTML = fname + ", you are wrong.";
    }
    else if (lieSelected) {
        gameAnswer.innerHTML = fname + ", you are correct!"
    }
}