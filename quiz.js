const questions = [
    {
        level: "Level 1: Remembering",
        question: "The oxidation number of ____ is +1, except when it is bonded to metals in binary compounds (that is compounds containing two elements)",
        correctAnswer: "hydrogen"
    },
    {
        level: "Level 1: Remembering",
        question: "Chlorine, ___ and iodine when combined with oxygen, for example in oxoacids and oxoanions, have positive oxidation numbers.",
        correctAnswer: "bromine"
    },
    {
        level: "Level 2: Understanding",
        question: "A term that is often used interchangeably with the oxidation number is the oxidation ______.",
        correctAnswer: "state"
    },
    {
        level: "Level 2: Understanding",
        question: "Charge transfer is better described as an ____ shift rather than a complete loss of it by H and gain by O",
        correctAnswer: "electron"
    },
    {
        level: "Level 3: Applying",
        question: "Off late, environmental issues like hydrogen economy, use of liquid hydrogen as _____ and ozone holes have started figuring under redox phenomenon",
        correctAnswer: "fuel"
    },
    {
        level: "Level 3: Applying",
        question: "In the ______ period, the highest value of oxidation number changes from 1 to 7.",
        correctAnswer: "third"
    }
];

let currentQuestionIndex = 0;
let responses = [];
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

function displayQuestion(index) {
    const question = questions[index];
    questionContainer.innerHTML = `
        <h2>Question ${index + 1}</h2>
        <p>${question.question}</p>
        <input type="text" id="answer-input" placeholder="Type your answer here">
    `;
    nextButton.classList.remove("hidden");
}

function calculateResults() {
    let totalScore = 0;
    const levelScores = {};
    const levelTotals = {};

    questions.forEach((question, index) => {
        const level = question.level;
        const correct = question.correctAnswer.trim().toLowerCase();
        const selected = (responses[index] || "").trim().toLowerCase();

        if (!levelScores[level]) {
            levelScores[level] = 0;
            levelTotals[level] = 0;
        }

        levelTotals[level]++;
        if (selected === correct) {
            totalScore++;
            levelScores[level]++;
        }
    });

    let resultHTML = `<p>Quiz Completed! Your total score: ${totalScore}/${questions.length}</p>`;
    for (const level in levelScores) {
        resultHTML += `<p>${level}: ${levelScores[level]}/${levelTotals[level]}</p>`;
    }

    // Determine the user's Bloom's taxonomy level based on their highest score
    const highestLevel = Object.entries(levelScores)
        .sort(([, a], [, b]) => b - a)
        .map(([level]) => level)[0];

    resultHTML += `<p>You are currently performing at the level of: <strong>${highestLevel}</strong>.</p>`;

    resultContainer.innerHTML = resultHTML;
    resultContainer.classList.remove("hidden");
    restartButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
}

nextButton.addEventListener("click", () => {
    const answerInput = document.getElementById("answer-input");
    const answer = answerInput ? answerInput.value : "";

    if (!answer.trim()) {
        alert("Please type an answer!");
        return;
    }

    responses[currentQuestionIndex] = answer;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        questionContainer.classList.add("hidden");
        calculateResults();
    }
});

restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    responses = [];
    questionContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    restartButton.classList.add("hidden");
    displayQuestion(currentQuestionIndex);
});

displayQuestion(currentQuestionIndex);
