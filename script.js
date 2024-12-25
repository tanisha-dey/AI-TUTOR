
function toggleTheme() {
    document.body.classList.toggle("dark");
    const button = document.getElementById("theme-toggle");
    button.innerText = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
}


async function startReading() {
    const fileInput = document.getElementById("upload-reading-material");
    if (!fileInput.files.length) {
        alert("Please upload a file to proceed.");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    const response = await fetch("YOUR_BACKEND_READING_API_ENDPOINT", {
        method: "POST",
        body: formData,
    });

    const data = await response.json();
    alert("Reading material processed successfully!");
    console.log(data);
}

async function simplifyText() {
    const textInput = document.getElementById("text-input").value;

    if (!textInput) {
        alert("Please enter text to simplify.");
        return;
    }

    try {
        const response = await fetch("THE_BACKEND_API", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: textInput }),
        });

        if (!response.ok) {
            throw new Error("Failed to simplify text.");
        }

        const data = await response.json();
        document.getElementById("simplified-output").innerText =
            data.simplifiedText || "Error simplifying text.";
    } catch (error) {
        console.error(error);
        alert("An error occurred while simplifying the text.");
    }
}


function startQuiz() {
   // window.location.href = "YOUR_QUIZ_PAGE_OR_API_URL";
    window.location.href = "quiz.html"; // Navigate to the quiz page
}



async function generateReport() {
    const response = await fetch("YOUR_BACKEND_REPORT_API_ENDPOINT", { method: "GET" });
    const data = await response.json();
    alert("Report generated! Check your dashboard for details.");
    console.log(data);
}
