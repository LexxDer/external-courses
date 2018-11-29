'use strict'
function Hangman(word) {
    this.word = word;

    this.errorsLeft = 6;
    this.wrongSymbols = [];

    this.answer = [];
    for (var i = 0; i < this.word.length; i++) {
        this.answer[i] = "_";
    };


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
        this.getStatus();
        return this;
    };

    this.getGuessedString = function () {
        console.log(this.answer.join(""));
        return this;
    };

    this.getErrorsLeft = function () {
        console.log(this.errorsLeft);
        return this;
    };

    this.getWrongSymbols = function () {
        console.log(this.wrongSymbols);
        return this;
    };

    this.getStatus = function () {
        if (this.answer.join("") === this.word) {
            console.log(this.answer.join("") + " | you won!");
        } else { console.log(this.answer.join("") + " | errors left " + this.errorsLeft) };
        return this;
    };

    this.startAgain = function (newWord) {
        this.word = newWord;


        this.errorsLeft = 6;
        this.wrongSymbols = [];

        this.answer = [];
        for (var i = 0; i < this.word.length; i++) {
            this.answer[i] = "_";
        }
        return this;
    };


}

module.exports = new Hangman('webpurple');