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

        });

    });

});