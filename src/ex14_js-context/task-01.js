var Calculator = {

    x: 0,

    add: function (y) {
        this.x += y;
        return this;
    },

    subtract: function (y) {
        this.x -= y;
        return this;
    },

    multiply: function (y) {
        this.x *= y;
        return this;
    },

    divide: function (y) {
        this.x /= y;
        return this;
    },

    getResult: function () {
        return this.x;
    },

    setState: function (y) {
        this.x = y;
        return this;
    },

    reset: function () {
        this.x = 0;
        return this;
    },

    fetchData: function () {

        setTimeout(function () {
            this.x = 500;
        }, 500);
    }

};
