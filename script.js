function calculateFactorial() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number) || number < 0) {
        document.getElementById('result').textContent = "Please enter a non-negative integer.";
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById('result').textContent = `The factorial of ${number} is ${factorial}.`;
}
