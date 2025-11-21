// ----------------------
// Guessing Game
// ----------------------

let number = Math.floor(Math.random() * 10) + 1;
let feedback = document.getElementById('feedback');

document.getElementById('guessBtn').onclick = () => {
    let guess = Number(document.getElementById('guessInput').value);

    if (!guess) {
        feedback.textContent = "Please enter a valid number.";
        return;
    }

    if (guess === number) {
        feedback.textContent = "Correct! 🎉 You guessed the number!";
    } else {
        feedback.textContent = "Wrong guess. Try again!";
    }
};


// ----------------------
// Simple Quiz
// ----------------------

let quiz = [
    { 
        q: "What does JS stand for?", 
        choices: ["JavaScript", "Java", "JSON"], 
        correct: "JavaScript" 
    },
    { 
        q: "Which symbol is used for comments in JS?", 
        choices: ["//", "/* * /", "#"], 
        correct: "//" 
    }
];

let index = 0;
let score = 0;

let questionEl = document.getElementById("question");
let choicesDiv = document.getElementById("choices");
let nextBtn = document.getElementById("nextBtn");
let scoreEl = document.getElementById("score");

// Load first question
loadQuestion();

function loadQuestion() {
    let q = quiz[index];
    questionEl.textContent = q.q;

    choicesDiv.innerHTML = "";

    q.choices.forEach(choice => {
        let btn = document.createElement("button");
        btn.textContent = choice;

        btn.onclick = () => {
            if (choice === q.correct) {
                score++;
            }

            index++;

            if (index < quiz.length) {
                loadQuestion();
            } else {
                endQuiz();
            }
        };

        choicesDiv.appendChild(btn);
    });
}

function endQuiz() {
    questionEl.textContent = "Quiz Completed!";
    choicesDiv.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = "Your Score: " + score + "/" + quiz.length;
}
