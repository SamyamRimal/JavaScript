function calculateFactorial() {
    const number = parseInt(document.getElementById('numberInput').value);
    const resultElement = document.getElementById('result');

    if (isNaN(number) || number < 0) {
        resultElement.textContent = "Please enter a non-negative integer.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    resultElement.textContent = `The factorial of ${number} is ${factorial}.`;
}
