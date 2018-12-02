var shape = {

    getType: function () {
        return this.type;
    },

    getPerimeter: function () {
        return this.perimetr;
    },

    draw: function () {
        console.log(this.name + "is drawn");
    }

}

function Triangle(name, a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = "Triangle";
    this.perimetr = a + b + c;
    this.name = name;
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;

function Square(name, a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.type = "Square";
    this.perimetr = a + b + c + d;
    this.name = name;
}

Square.prototype = shape;
Square.prototype.constructor = Square;

function Parallelogram(name, a, b, c, d, rad) {
    Square.call(this, name, a, b, c, d);
    this.rad = rad;
}

Parallelogram.prototype = Object.create(Square.prototype);
Parallelogram.prototype.constructor = Parallelogram;

Parallelogram.prototype.getArea = function () {
    return this.area = this.a * this.b * Math.sin(this.rad);
}

var tr1 = new Triangle("Треугольник", 2, 3, 4);

var sq1 = new Square("Квадрат", 2, 2, 2, 2);

var par1 = new Parallelogram("Параллелограмм", 2, 4, 2, 4, 0.5);
