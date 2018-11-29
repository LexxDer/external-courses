var Calculator = function () {
    var x = 0;

    return {
        add: function (y = 0) {
            x += y;
            return this;
        },

        subtract: function (y = 0) {
            x -= y;
            return this;
        },

        multiply: function (y = 1) {
            x *= y;
            return this;
        },

        divide: function (y = 1) {
            x /= y;
            return this;
        },

        getResult: function () {
            return x;
        },

        setState: function (y) {
            if (y) {
                x = y;
            }
            return this;
        },

        reset: function () {
            x = 0;
            return this;
        },

        fetchData: function (callback) {
            x = 500;
            setTimeout(callback, 1000, x);
            return this;
        }
    }
}();

module.exports = Calculator;