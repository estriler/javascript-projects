const whoWon = require('../RPS.js');

describe("whoWon", function(){

    it("should produce 'tie' when both players choose same option", function(){
        let output = whoWon("paper", "paper");
        expect(output).toEqual("TIE!");
    });

    it("should announce player 2 the winner when player 1 chooses 'rock' and player 2 chooses 'paper'", function(){
        let output = whoWon("rock", "paper");
        expect(output).toEqual("Player 2 wins!");
    });

    it("should announce player 2 the winner when player 1 chooses 'paper' and player 2 chooses 'scissors'", function(){
        let output = whoWon("paper", "scissors");
        expect(output).toEqual("Player 2 wins!");
    });

    it("should announce player 2 the winner when player 1 chooses 'scissors' and player 2 chooses 'rock'", function(){
        let output = whoWon("scissors", "rock");
        expect(output).toEqual("Player 2 wins!");
    });

    it("should announce player 1 the winner when player 2 looses", function(){
        let output = whoWon("paper","rock");
        expect(output).toEqual("Player 1 wins!");
    });

});
