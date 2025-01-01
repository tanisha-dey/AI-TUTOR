const questions = [
    {
        level: "Level 1: Remembering",
        question: "The following illustration is another reaction where removal of hydrogen can also be cited as _________:",
        correctAnswer: "An oxidation reaction"
    },
    {
        level: "Level 1: Remembering",
        question: "To summarize, ________ is defined as the addition of oxygen/electronegative element to a substance or removal of hydrogen/electropositive element from a substance:",
        correctAnswer: "The term “oxidation”"
    },
    {
        level: "Level 2: Understanding",
        question: "2 H₂S(g) + O₂(g) → 2 S (s) + 2 H₂O (l). This reaction does not involve oxygen but ____________:",
        correctAnswer: "Other electronegative elements"
    },
    {
        level: "Level 2: Understanding",
        question: "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O (l). A careful examination of reaction (7.3) shows that oxygen has replaced ______, prompting chemists to reinterpret oxidation:",
        correctAnswer: "Which hydrogen"
    },
    {
        level: "Level 3: Applying",
        question: "Because of the presence of dioxygen in the atmosphere (~20%), many elements combine with it and this is _______ why they commonly occur on the earth in the form of their oxides:",
        correctAnswer: "The principal reason"
    },
    {
        level: "Level 3: Applying",
        question: "In reaction (7.11), simultaneous oxidation of _______ to stannic chloride is also occurring because of the addition of electronegative element chlorine to it:",
        correctAnswer: "Stannous chloride"
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
