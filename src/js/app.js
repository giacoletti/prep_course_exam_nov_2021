const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const button = document.getElementById('calculate-bmi');
const messageElement = document.getElementById('response-message');
const BMI = new BMICalculator();

button.addEventListener('click', () => {
    if (heightInput.value === '') {
        messageElement.innerText = 'Enter a height, please!';
    } else if ((!isNumber(heightInput.value)) || (heightInput.value <= 0)) {
        messageElement.innerText = 'Please enter a valid height!';
    } else if (weightInput.value === '') {
        messageElement.innerText = 'Enter a weight, please!';
    } else {
        const bmiResult = BMI.calculateBMIMetric({ height: heightInput.value, weight: weightInput.value })
        messageElement.innerText = `BMI: ${bmiResult.value} - ${bmiResult.classification}`;
    }
});

function isNumber(n) {
    return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}