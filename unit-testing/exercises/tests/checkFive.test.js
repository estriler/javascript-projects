const checkFive = require('../checkFive.js');
const test = require('../checkFive.js');

describe("checkFive", function(){

    it("Should produce a 'less than' result when given a number less than 5.", function(){
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    });

    it("Should produce a 'greater than' result when given a number greater than 5.", function(){
        let output = checkFive(8);
        expect(output).toEqual("8 is greater than 5.");
    });

    it("Should produce a 'equal to' result when passed the number 5.", function(){
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5.");
    });

});