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

function convert(choice) {
    if (choice == "r") return "Rock";
    if (choice == "p") return "Paper";
    if (choice == "s") return "Scissors";
}

function wins(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convert(user) + " beats " + convert(comp) + ". You Win!";
    document.getElementById(user).classList.add("green-glow");
    setTimeout(() => document.getElementById(user).classList.remove("green-glow"), 300);
}

function loose(user, comp) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convert(comp) + " beats " + convert(user) + ". You Loose!";
    document.getElementById(user).classList.add("red-glow");
    setTimeout(() => document.getElementById(user).classList.remove("red-glow"), 300);
}

function draw(user, comp) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = convert(comp) + " equals " + convert(user) + ". Its a Draw!";
    document.getElementById(user).classList.add("gray-glow");
    setTimeout(() => document.getElementById(user).classList.remove("gray-glow"), 300);
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
            loose(userChoice, compChoice);
            break;
        
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_button.addEventListener("click", () => game("r"));

    paper_button.addEventListener("click", () => game("p"));

    scissors_button.addEventListener("click", () => game("s"));
}

main();