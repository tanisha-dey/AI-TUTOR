// Start Learning Button Function
function startLearning() {
    alert("Get ready to start your learning journey with AI Tutor!");
}

// Modal for Feature Details
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

function showDetails(feature) {
    let details = {
        personalized: {
            title: "Personalized Learning",
            text: "Our AI adapts to your learning style to provide a unique experience just for you!"
        },
        availability: {
            title: "24/7 Availability",
            text: "Access learning anytime with our AI tutor available around the clock."
        },
        chat: {
            title: "Chat Box",
            text: "Make learning more accessible, personalized and interactive, enhancing students overall educational experience."
        },
        focus: {
            title: "Focus mode",
            text: "Creating a distraction-free environment, enabling students to stay engaged and productive while studying."
        }
    };

    modalTitle.textContent = details[feature].title;
    modalText.textContent = details[feature].text;
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}
