function Calculator() {
    this.x = 0;
}

Calculator.prototype.add = function (y = 0) {
    this.x += y;
    return this;
};

Calculator.prototype.subtract = function (y = 0) {
    this.x -= y;
    return this;
};

Calculator.prototype.multiply = function (y = 1) {
    this.x *= y;
    return this;
};

Calculator.prototype.divide = function (y = 1) {
    this.x /= y;
    return this;
};

Calculator.prototype.getResult = function () {
    return this.x;
};

Calculator.prototype.setState = function (y) {
    if (y) {
        this.x = y;
    }
    return this;
};

Calculator.prototype.reset = function () {
    this.x = 0;
    return this;
};

Calculator.prototype.fetchData = function (callback) {
    this.x = 500;
    setTimeout(callback, 1000, this.x);
    return this;
}

function SimpleCalc() {
    Calculator.call(this);
}

SimpleCalc.prototype = Object.create(Calculator.prototype);
SimpleCalc.prototype.constructor = SimpleCalc;

function ProgCalc() {
    Calculator.call(this);
}

ProgCalc.prototype = Object.create(Calculator.prototype);
ProgCalc.prototype.constructor = ProgCalc;

ProgCalc.prototype.getBin = function (num) {
    this.x = num.toString(2);
    return this;
}

ProgCalc.prototype.getBin = function (num) {
    this.x = num.toString(2);
    return this;
}

ProgCalc.prototype.getOct = function (num) {
    this.x = num.toString(8);
    return this;
}

ProgCalc.prototype.getHex = function (num) {
    this.x = num.toString(16);
    return this;
}

function EngCalc() {
    Calculator.call(this);
}

EngCalc.prototype = Object.create(Calculator.prototype);
EngCalc.prototype.constructor = EngCalc;

EngCalc.prototype.getSin = function (rad) {
    this.x = Math.sin(rad);
    return this;
}

EngCalc.prototype.getCos = function (rad) {
    this.x = Math.sin(rad);
    return this;
}

function BookerCalc(cursUsd) {
    Calculator.call(this);
    this.cursRub = 1 / cursUsd;
    this.cursUsd = cursUsd;
}

BookerCalc.prototype = Object.create(Calculator.prototype);
BookerCalc.prototype.constructor = BookerCalc;

BookerCalc.prototype.getRub = function (usd) {
    this.x = this.cursRub * usd;
    return this;
}

BookerCalc.prototype.getUsd = function (rub) {
    this.x = this.cursUsd * rub;
    return this;
}


var calc = new Calculator();
calc.add(30).getResult();

var calc1 = new ProgCalc();
calc1.getBin(30);
calc1.getResult();

var calc2 = new EngCalc();
calc2.getSin(30);
calc2.getResult();

var calc3 = new BookerCalc(70);
calc3.getRub(60);
calc3.getResult();
calc3.getUsd(30);
calc3.getResult();
