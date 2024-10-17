let randomNumber = Math.floor(Math.random()*100) + 1;
let attempts = 0

const displayResult = document.getElementById("result")
const displayAttempt = document.getElementById("attempts")
const guessInput = document.getElementById("guessNumber")
const submitGuess = document.getElementById("submitGuess")
const restartButton = document.getElementById("restart")

submitGuess.addEventListener('click',() =>{
    const userGuess = Number(guessInput.value)
    attempts++;

      // Clear previous classes
      displayResult.classList.remove('too-low', 'too-high', 'correct');

    if(userGuess === randomNumber){
        displayResult.textContent = "CONGRADULATIONS !! You guessed right 😍"
        displayResult.classList.add('correct')
        displayAttempt.textContent = `Attempts : ${attempts} | Last Guess:  ${userGuess}` 

        submitGuess.disabled = true
        restartButton.style.display = 'block'
    }else if (userGuess < randomNumber) {
        displayResult.textContent = 'Too low! Try again.';
        displayResult.classList.add('too-low')
    } else if (userGuess > randomNumber) {
        displayResult.textContent = 'Too high! Try again.';
        displayResult.classList.add('too-high')
    }

    displayAttempt.textContent = `Attempts : ${attempts} |Last Guess:  ${userGuess}`;
    guessInput.value = ''; // Clear input field
})

restartButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    displayResult.textContent = '';
    displayAttempt.textContent = '';
    guessInput.value = '';
    submitGuess.disabled = false; // Re-enable the button
    restartButton.style.display = 'none'; // Hide restart button
});