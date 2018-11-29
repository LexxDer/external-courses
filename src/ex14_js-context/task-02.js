'use strict'
function Hangman(word) {
    this.word = word;

    this.errorsLeft = 6;
    this.wrongSymbols = [];

    this.answer = [];
    for (var i = 0; i < this.word.length; i++) {
        this.answer[i] = "_";
    };
    this.answer = this.answer.join("");


    this.guess = function (letter) {
        var flagSearch = 0;

        if (this.errorsLeft !== 0) {

            if (letter.length === 1) {

                letter = letter.toLowerCase();

                for (var j = 0; j < this.word.length; j++) {

                    if (this.word[j] === letter) {
                        this.answer[j] = letter;
                        flagSearch++;

                    } else if (flagSearch === 0 && j === this.word.length - 1) {
                        this.errorsLeft--;
                        this.wrongSymbols.push(letter);
                        if (this.errorsLeft === 0) console.log("You lost");
                    }

                }

            } else console.log("One letter");

        } else console.log("You lost. New game?");
        return this;
    };

    this.getGuessedString = function () {
        console.log(this.answer);
        return this.answer;
    };

    this.getErrorsLeft = function () {
        console.log(this.errorsLeft);
        return this.errorsLeft;
    };

    this.getWrongSymbols = function () {
        console.log(this.wrongSymbols);
        return this.wrongSymbols;
    };

    this.getStatus = function () {
        if (this.answer === this.word) {
            console.log(this.answer + " | you won!");
        } else { console.log(this.answer + " | errors left " + this.errorsLeft) };
    };

    this.startAgain = function (newWord) {
        this.word = newWord;


        this.errorsLeft = 6;
        this.wrongSymbols = [];

        this.answer = [];
        for (var i = 0; i < this.word.length; i++) {
            this.answer[i] = "_";
        }
        this.answer = this.answer.join("");
        return this;
    };


}

module.exports = new Hangman('webpurple');