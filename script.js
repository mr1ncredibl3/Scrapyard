let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
    const inputElement = document.getElementById("guess");
    const feedbackElement = document.getElementById("feedback");
    const guess = inputElement.value;
    if (guess == randomNumber) {
        feedbackElement.innerHTML = "Congratulations! Shameezo is happy now";
        feedbackElement.style.color = "green";
    } else if (guess < randomNumber) {
        feedbackElement.innerHTML = "Too high! Shameezo is getting mad";
        feedbackElement.style.color = "red";
    } else {
        feedbackElement.innerHTML = "Too Low! Shameezo is getting mad";
        feedbackElement.style.color = "red";
    }
}
document.getElementById("fjhgh").onclick = checkGuess