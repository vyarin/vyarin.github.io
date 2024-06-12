const questionData = data;

let p1Score = 0;
let p2Score = 0;

let p1Name = "";
let p2Name = "";

let p1Sign = "";
let p2Sign = "";

let p1Profile = "./img/profiles/014.png";
let p2Profile = "./img/profiles/007.png";

let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
})

function displayScore(player) {
    if (player == 1) {
        document.getElementById("p1-score").innerHTML = USDollar.format(p1Score);
    } else if (player == 2) {
        document.getElementById("p2-score").innerHTML = USDollar.format(p2Score);
    }
    
}

function checkBalanceOverBounds(balance) {
    if (balance >= 18000) {
        return true;
    }
    return false;
}

function checkBalanceUnderBounds(balance) {
    if (balance <= -18000) {
        return true;
    }
    return false;
}

function add(player) {
    if (player == 1) {
        if (!checkBalanceOverBounds(p1Score)) {
            p1Score += 200;
            displayScore(1);
        }
    } else if (player == 2) {
        if (!checkBalanceOverBounds(p2Score)) {
            p2Score += 200;
            displayScore(2);
        }
    }
}

function subtract(player) {
    if (player == 1) {
        if (!checkBalanceUnderBounds(p1Score)) {
            p1Score -= 200;
            displayScore(1);
        }
    } else if (player == 2) {
        if (!checkBalanceUnderBounds(p2Score)) {
            p2Score -= 200;
            displayScore(2);
        }
    }
}

function increment() {
    let p1ButtonWrapper = document.getElementById("p1-increment");
    p1ButtonWrapper.querySelector(".add").onclick = function () {
        add(1);
    };
    p1ButtonWrapper.querySelector(".subtract").onclick = function () {
        subtract(1);
    };

    let p2ButtonWrapper = document.getElementById("p2-increment");
    p2ButtonWrapper.querySelector(".add").onclick = function () {
        add(2);
    };
    p2ButtonWrapper.querySelector(".subtract").onclick = function () {
        subtract(2);
    };
}

function setUp() {
    let p1CanvasWrapper = document.getElementById("p1");
    canvas1 = p1CanvasWrapper.querySelector("canvas");

    let signaturePad1 = new SignaturePad(canvas1, {
        maxWidth: 1.8,
        penColor: "#FEFEFE",
        backgroundColor: "#1E2327"
    });

    let p2CanvasWrapper = document.getElementById("p2");
    canvas2 = p2CanvasWrapper.querySelector("canvas");

    let signaturePad2 = new SignaturePad(canvas2, {
        maxWidth: 1.8,
        penColor: "#FEFEFE",
        backgroundColor: "#1E2327"
    });

    // Resize canvas
    function resizeCanvas() {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas1.width = canvas1.offsetWidth * ratio;
        canvas1.height = canvas1.offsetHeight * ratio;
        canvas1.getContext("2d").scale(ratio, ratio);

        canvas2.width = canvas2.offsetWidth * ratio;
        canvas2.height = canvas2.offsetHeight * ratio;
        canvas2.getContext("2d").scale(ratio, ratio);

        signaturePad1.clear();
        signaturePad2.clear();
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Clear function
    document.getElementById("p1-clear").onclick = function () {
        signaturePad1.clear();
        document.getElementById("p1-canvas").classList.add("cleared");
        setTimeout(() => {
            document.getElementById("p1-canvas").classList.remove("cleared");
        }, 350);
    };

    document.getElementById("p2-clear").onclick = function () {
        signaturePad2.clear();
        document.getElementById("p2-canvas").classList.add("cleared");
        setTimeout(() => {
            document.getElementById("p2-canvas").classList.remove("cleared");
        }, 350);

    };

    // The game
    document.getElementById("config").addEventListener("submit", function (e) {
        e.preventDefault();

        // Set values
        p1Name = document.getElementById("p1-name-input").value.substring(0, 17);
        document.getElementById("p1-name").innerHTML = p1Name;

        p1Img = document.getElementById("p1-profile");
        p2Img = document.getElementById("p2-profile");

        p1Img.src = p1Profile;
        p2Img.src = p2Profile

        if (!signaturePad1.isEmpty()) {
            p1Sign = signaturePad1.toSVG();
            document.getElementById("p1-name").innerHTML = p1Sign;
        }
        displayScore(1);


        p2Name = document.getElementById("p2-name-input").value.substring(0, 17);
        document.getElementById("p2-name").innerHTML = p2Name;

        if (!signaturePad2.isEmpty()) {
            p2Sign = signaturePad2.toSVG();
            document.getElementById("p2-name").innerHTML = p2Sign;
        }
        displayScore(2);

        document.getElementById("game").classList.remove("obscure");


        let screen = document.getElementById("start-screen");
        screen.classList.add("slide");

        setTimeout(() => {
            document.getElementById("start-screen").classList.remove("hide");
        }, 2990);

        screen.ariaHidden = "false" ? "true" : "false";
    }); 
}

function displayQuestion(question) {
    document.getElementById("card-question-answer").innerHTML = question["question"];

    if (question["has-image"]) {
        let img = new Image();
        img.src = "./img/" + question["image"];
        document.getElementById("card-image").appendChild(img);
    }
}

function toggleDisableButton(button) {
    button.classList.toggle("grey-out-button");
    if (button.classList.contains("grey-out-button")) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

function disableClue(clue) {
    clue.classList.add("grey-out-clue");
}

function checkDisabled(clue) {
    return clue.classList.contains("grey-out-clue");
}

function openClue() {
    let clue = this;
    let row = this.dataset.row;
    let col = this.dataset.col;
    // let pos = $(this).position();
    
    let image = document.getElementById("card-image");
    let question = data[col]["questions"][row];
    let questionContainer = document.getElementById("card-question-answer");
    let clueMessage = document.getElementById("message");
    let revealButton = document.getElementById("reveal-answer");

    displayQuestion(question);

    if (checkDisabled(clue)) {
        clueMessage.innerHTML = "You already answered this question";
    } else {
        clueMessage.innerHTML = "";
    }
    
    document.getElementById("card").classList.toggle("hide");
    document.getElementById("exit").onclick = function () {
        image.innerHTML = "";
        document.getElementById("card").classList.toggle("hide");
        if (revealButton.classList.contains("grey-out-button")) {
            toggleDisableButton(revealButton);
            disableClue(clue);
        }
    };
    
    revealButton.onclick = function () {
        image.innerHTML = "";
        if (data[col]["questions"][row]["type"] == "mcq") {
            questionContainer.innerHTML = question["options"][question["answer"]];
        } else {
            questionContainer.innerHTML = question["answer"];
        }
        toggleDisableButton(revealButton);
    };
}
function toggleMenu () {
    document.getElementById("menu-items").classList.toggle("hide");
    document.getElementById("submit").classList.toggle("hide");
}

function toggleInstructions() {
    toggleMenu();
    document.getElementById("instructions-menu").classList.toggle("hide");
}

function instructions() {
    document.getElementById("instructions").onclick = function () {
        toggleInstructions();
    };
    document.getElementById("exit-instructions").onclick = function () {
        toggleInstructions();
    };
}

function cycleNumber(direction, number) {
    if (direction == 0) {
        if (number == 0) {
            return 21;
        } else {
            return number - 1;
        }
    } else if (direction == 1) {
        if (number == 21) {
            return 0;
        } else {
            return number + 1;
        }
    }
}

function pad(num) {
    let s = "00" + num;
    return s.substring(s.length - 3);
}


function getNextProfile() {
    let direction = this.dataset.direction;
    let player = this.dataset.player;

    if (player == 1) {
        p1Profile = "./img/profiles/" + pad(cycleNumber(direction, parseInt(p1Profile.substring(15, 18), 10))) + ".png";
        console.log(p1Profile.substring(0, 3));
    } else if (player == 2) {
        p2Profile = "./img/profiles/" + pad(cycleNumber(direction, parseInt(p2Profile.substring(15, 18), 10))) + ".png";
    }
    showProfiles();
}

function showProfiles() {
    let img1 = document.getElementById("p1-profile-img");
    let img2 = document.getElementById("p2-profile-img");

    img1.src = p1Profile;
    img2.src = p2Profile;
}

function editProfile() {
    document.getElementById("edit-profile").onclick = function () {
        toggleMenu();
        document.getElementById("profile-menu").classList.toggle("hide");
        showProfiles();

        let cycle = document.querySelectorAll(".cycle");
        for (let i = 0; i < cycle.length; i++) {
            cycle[i].addEventListener("click", getNextProfile);
        }
    };
    document.getElementById("exit-edit-profile").onclick = function () {
        toggleMenu();
        document.getElementById("profile-menu").classList.toggle("hide");
    };
}

function endGame() {
    endButton = document.getElementById("end-game");
    titleMessage = document.getElementById("win-message");
    winnerImage = document.getElementById("winner-img");

    endButton.onclick = function () {
        if (p1Score > p2Score) {
            titleMessage.innerHTML = "The winner is " + p1Name + "!";
            winnerImage.src = p1Profile;
        } else if (p2Score > p1Score) {
            titleMessage.innerHTML = "The winner is " + p2Name + "!";
            winnerImage.src = p2Profile;
        } else {
            titleMessage.innerHTML = "It's a tie!";
        }
        document.getElementById("win-container").classList.remove("hide");
    }
}

function playAgain() {
    playButton = document.getElementById("play-again");
    playButton.onclick = function () {
        window.location.reload();
        return false;
    };
}

document.addEventListener("DOMContentLoaded", function () {
    setUp();

    instructions();
    editProfile();

    increment();

    let clues = document.querySelectorAll(".clue");

    for (let i = 0; i < clues.length; i++) {
        clues[i].addEventListener("click", openClue);
    }

    endGame();
    playAgain();

});