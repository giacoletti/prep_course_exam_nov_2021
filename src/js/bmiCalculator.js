class BMICalculator {

    calculateBMIMetric(details){
        const height = details.height / 100;
        let bmiValue = (1.3 * details.weight) / (Math.pow(height, 2.5));
        bmiValue = parseFloat(bmiValue.toFixed(2));
        return { value: bmiValue };
    }
    
}

if ( typeof module !== undefined && module.exports) {
    module.exports = BMICalculator;
}