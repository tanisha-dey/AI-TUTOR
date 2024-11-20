function toggleTheme() {
    document.body.classList.toggle("dark");
    const button = document.getElementById("theme-toggle");
    if (document.body.classList.contains("dark")) {
        button.innerText = "☀️ Light Mode";
    } else {
        button.innerText = "🌙 Dark Mode";
    }
}
