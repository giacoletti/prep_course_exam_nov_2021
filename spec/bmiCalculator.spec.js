const BMICalculator = require('../src/js/bmiCalculator');

subject = new BMICalculator();

describe('BMI Calculator', () => {

    describe('#calculateBMIMetric()', () => {

        let results;

        describe('Diana', () => {

            beforeEach(() => {
                results = subject.calculateBMIMetric({ height: 164, weight: 54 });
            });
            
            it('is expected to return a numeric value (float with 2 decimals) if given correct arguments', () => {
                expect(results.value).toEqual(20.38);
            });
            
            it('is expected to return BMI Classification "Normal Weight"', () => {
                expect(results.classification).toEqual('Normal Weight');
            });
            
        });
        
        describe('Nancy (Underweight)', () => {
            
            beforeEach(() => {
                results = subject.calculateBMIMetric({ height: 164, weight: 44 });
            });
            
            it('is expected to return BMI value, float with 2 decimals', () => {
                expect(results.value).toEqual(16.61); 
            });
            
            it('is expected to return BMI classification "Underweight"', () => {
                expect(results.classification).toEqual('Underweight');
            });
            
        });
        
        describe('Max (Overweight)', () => {
            
            beforeEach(() => {
                results = subject.calculateBMIMetric({ height: 178, weight: 90 });
            });
            
            it('is expected to return BMI value, float with 2 decimals', () => {
                expect(results.value).toEqual(27.68);
            });
            
            it('is expected to return BMI classification "Overweight"', () => {
                expect(results.classification).toEqual('Overweight');
            });
            
        });

        describe('Obesity Class 1 person', () => {
            
            beforeEach(() => {
                results = subject.calculateBMIMetric({ height: 178, weight: 100 });
            });
            
            it('is expected to return BMI value, float with 2 decimals', () => {
                expect(results.value).toEqual(30.75);
            });
            
            it('is expected to return BMI classification "Obesity Class 1"', () => {
                expect(results.classification).toEqual('Obesity Class 1');
            });
            
        });
        
        describe('Obesity Class 2 person', () => {
            
            beforeEach(() => {
                results = subject.calculateBMIMetric({ height: 178, weight: 120 });
            });
            
            it('is expected to return BMI value, float with 2 decimals', () => {
                expect(results.value).toEqual(36.90);
            });

            it('is expected to return BMI classification "Obesity Class 2"', () => {
                expect(results.classification).toEqual('Obesity Class 2');
            });
            
        });

        describe('Extreme Obesity Class 3 person', () => {
            
            beforeEach(() => {
                results = subject.calculateBMIMetric({ height: 178, weight: 150 });
            });

            it('is expected to return BMI value, float with 2 decimals', () => {
                expect(results.value).toEqual(46.13);
            });

            it('is expected to return BMI classification "Extreme Obesity Class 3"', () => {
                expect(results.classification).toEqual('Extreme Obesity Class 3');
            });

        });

    });

});