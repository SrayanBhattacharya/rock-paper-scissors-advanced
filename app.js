let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".result-message > p1");
const rock_button = document.getElementById("r");
const paper_button = document.getElementById("p");
const scissors_button = document.getElementById("s");

function getCompChoice() {
    const choices = ["r", "p", "s"];
    return choices[Math.floor(Math.random() * 3)];
}

function wins(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = user + " beats " + comp + " . You Win!";
}

function game(userChoice) { 
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, compChoice);
            break;
        
        case "rp":
        case "ps":
        case "sr":
            loose();
            break;
        
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
}

function main() {
    rock_button.addEventListener("click", function() {
        game("r");
    })

    paper_button.addEventListener("click", function() {
        game("p");
    })

    scissors_button.addEventListener("click", function() {
        game("s");
    })
}

main();