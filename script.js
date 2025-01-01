
function toggleTheme() {
    document.body.classList.toggle("dark");
    const button = document.getElementById("theme-toggle");
    button.innerText = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
}


async function startReading() {
    // const fileInput = document.getElementById("upload-reading-material");
    // if (!fileInput.files.length) {
    //     alert("Please upload a file to proceed.");
    //     return;
    // }

    // const formData = new FormData();
    // formData.append("file", fileInput.files[0]);

    // const response = await fetch("YOUR_BACKEND_READING_API_ENDPOINT", {
    //     method: "POST",
    //     body: formData,
    // });

    // const data = await response.json();
    // alert("Reading material processed successfully!");
    // console.log(data);
    window.location.href = "bot.html";
}

// async function simplifyText() {
//     const textInput = document.getElementById("text-input").value;

//     if (!textInput) {
//         alert("Please enter text to simplify.");
//         return;
//     }

//     try {
//         const response = await fetch("THE_BACKEND_API", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ text: textInput }),
//         });

//         if (!response.ok) {
//             throw new Error("Failed to simplify text.");
//         }

//         const data = await response.json();
//         document.getElementById("simplified-output").innerText =
//             data.simplifiedText || "Error simplifying text.";
//     } catch (error) {
//         console.error(error);
//         alert("An error occurred while simplifying the text.");
//     }
// }

// function simplifyText() {
//     const textInput = document.getElementById("text-input").value;

//     if (!textInput) {
//         alert("Please enter text to simplify.");
//         return;
//     }

//     // Basic logic to simplify text
//     const complexToSimpleWords = {
//         "oxidation": "losing electrons",
//         "reduction": "gaining electrons",
//         "oxidizing agent": "electron acceptor",
//         "reducing agent": "electron donor",
//         "redox reaction": "reaction involving electron transfer",
//         "oxidation number": "charge of an atom",
//         "electrochemical cell": "device that generates electricity using a chemical reaction",
//         "anode": "where oxidation happens",
//         "cathode": "where reduction happens",
//         "electrolyte": "solution that conducts electricity",
//         "electrode": "a conductor in a circuit",
//         "disproportionation": "a reaction where one substance is both oxidized and reduced"
//     };

//     // Simplify each word in the text
//     const simplifiedText = textInput
//         .split(" ")
//         .map(word => {
//             // Strip punctuation from the word
//             const strippedWord = word.toLowerCase().replace(/[.,!?]/g, "");
//             return complexToSimpleWords[strippedWord] || word; // Replace if found in dictionary
//         })
//         .join(" ");

//     // Display the simplified text
//     document.getElementById("simplified-output").innerText = simplifiedText || "Error simplifying text.";
// }
function openSimplificationPage() {
    window.location.href = "simplify.html";
}

function simplifyText() {
    const input = document.getElementById("text-input").value;

    if (!input.trim()) {
        document.getElementById("simplified-output").innerText = "Please enter text to simplify.";
        return;
    }

    // Break input into sentences
    const sentences = input.match(/[^\.!\?]+[\.!\?]+/g) || [input];

    // Extract key points
    const keyPoints = sentences.filter(sentence => {
        // Keep sentences that define, explain, or give examples
        return /for example|involves|is called|such as|essential|key role|important|defined/i.test(sentence);
    });

    // Format as bullet points
    const output = keyPoints.map(point => `- ${point.trim()}`).join("\n");

    document.getElementById("simplified-output").innerText = output;
}



// function simplifyText() {
//     const textInput = document.getElementById("text-input").value;

//     if (!textInput) {
//         alert("Please enter text to simplify.");
//         return;
//     }

//     // Break the input into sentences for better processing
//     const sentences = textInput.match(/[^.!?]+[.!?]/g) || [textInput];
    
//     // Sort sentences based on importance using predefined keywords
//     const keywords = ["redox", "oxidized", "reduced", "agent", "reaction", "electrons"];
//     const rankedSentences = sentences.sort((a, b) => {
//         const aRank = keywords.filter(keyword => a.toLowerCase().includes(keyword)).length;
//         const bRank = keywords.filter(keyword => b.toLowerCase().includes(keyword)).length;
//         return bRank - aRank; // Higher rank comes first
//     });

//     // Format the result as a list
//     const simplifiedText = rankedSentences
//         .map(sentence => `- ${sentence.trim()}`)
//         .join("\n");

//     // Display the simplified text
//     const outputContainer = document.getElementById("simplified-output");
//     if (outputContainer) {
//         outputContainer.textContent = simplifiedText || "Error simplifying text.";
//     } else {
//         alert(simplifiedText); // Fallback if the output container is not available
//     }
// }
// function simplifyText() {
//     const input = document.getElementById("text-input").value;

//     if (!input.trim()) {
//         document.getElementById("simplified-output").innerText = "Please enter text to simplify.";
//         return;
//     }

//     // Simplification logic
//     const simplifiedPoints = simplifyToKeyPoints(input, 4); // Limit to 4 points
//     const output = simplifiedPoints.map(point => `- ${point}`).join("\n");

//     document.getElementById("simplified-output").innerText = output;
// }

// function simplifyToKeyPoints(paragraph, maxPoints) {
//     // Key ideas extraction (manual condensing logic)
//     let keyPoints = [];

//     // Example logic for simplification
//     if (/redox reactions/i.test(paragraph)) {
//         keyPoints = [
//             "Redox reactions involve the transfer of electrons between substances.",
//             "One substance is oxidized (loses electrons), and another is reduced (gains electrons).",
//             "They are essential in processes like energy production, respiration, and corrosion.",
//             "Examples include the formation of water from hydrogen and oxygen or the rusting of iron."
//         ];
//     }

//     // If more than max points, truncate
//     return keyPoints.slice(0, maxPoints);
// }

function startQuiz() {
   // window.location.href = "YOUR_QUIZ_PAGE_OR_API_URL";
    window.location.href = "quiz.html"; // Navigate to the quiz page
}



// async function generateReport() {
//     const response = await fetch("YOUR_BACKEND_REPORT_API_ENDPOINT", { method: "GET" });
//     const data = await response.json();
//     alert("Report generated! Check your dashboard for details.");
//     console.log(data);
// }
