class BMICalculator {

    calculateBMIMetric(details){
        const height = details.height / 100;
        let bmiValue = (1.3 * details.weight) / (Math.pow(height, 2.5));
        bmiValue = parseFloat(bmiValue.toFixed(2));
        return { 
            value: bmiValue, 
            classification: this.getBMIClassification(bmiValue)
        };
    }

    getBMIClassification(bmiValue){
        if (bmiValue < 18.5) {
            return 'Underweight';
        } else if(bmiValue <= 24.99) {
            return 'Normal Weight';
        } else if(bmiValue <= 29.99) {
            return 'Overweight';
        } else if(bmiValue <= 34.99) {
            return 'Obesity Class 1';
        } else if(bmiValue <= 39.99) {
            return 'Obesity Class 2';
        } else {
            return 'Extreme Obesity Class 3';
        }
    }

}

if ( typeof module !== 'undefined' && module.exports) {
    module.exports = BMICalculator;
}