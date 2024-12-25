const questions = [
    {
        sectionName: "General Knowledge",
        level: "Level 1",
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        sectionName: "Science",
        level: "Level 2",
        question: "What is H2O commonly known as?",
        options: ["Oxygen", "Water", "Hydrogen", "Salt"],
        correctAnswer: "Water"
    },
    //Replace the questions array in script.js with your desired questions or fetch them dynamically from a JSON file or API.
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
        <h2>Question ${index + 1} (${question.level})</h2>
        <p>${question.question}</p>
        ${question.options.map((option, i) => `
            <div>
                <input type="radio" name="option" id="option${i}" value="${option}">
                <label for="option${i}">${option}</label>
            </div>
        `).join("")}
    `;
    nextButton.classList.remove("hidden");
}

function calculateResults() {
    let totalScore = 0;
    const levelScores = {};
    const levelTotals = {};
    const sectionsToReview = new Set();

    questions.forEach((question, index) => {
        const level = question.level;
        const correct = question.correctAnswer;
        const selected = responses[index] || "";

        if (!levelScores[level]) {
            levelScores[level] = 0;
            levelTotals[level] = 0;
        }
        levelTotals[level]++;
        if (selected === correct) {
            totalScore++;
            levelScores[level]++;
        } else {
            sectionsToReview.add(question.sectionName);
        }
    });

    let resultHTML = `<p>Quiz Completed! Your total score: ${totalScore}/${questions.length}</p>`;
    for (const level in levelScores) {
        resultHTML += `<p>${level}: ${levelScores[level]}/${levelTotals[level]}</p>`;
    }

    if (sectionsToReview.size > 0) {
        resultHTML += `<p>You should revisit the following subtopics:</p>`;
        sectionsToReview.forEach(section => {
            resultHTML += `<p>- ${section}</p>`;
        });
    } else {
        resultHTML += `<p>Great job! No sections need revisiting.</p>`;
    }

    resultContainer.innerHTML = resultHTML;
    resultContainer.classList.remove("hidden");
    restartButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
}

nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }
    responses[currentQuestionIndex] = selectedOption.value;

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
