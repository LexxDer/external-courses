var shape = {

    getType: function () {
        return this.type;
    },

    getPerimeter: function(){
        return this.edges.reduce((a,b)=>a+b, 0)
    },

    draw: function () {
        console.log(this.name + "is drawn");
    }

}

function Triangle(name, a, b, c) {
    this.type = "Triangle";
    this.edges = [a, b, c];
    this.name = name;
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;

function Square(name, a, b) {
    this.type = "Square";
    this.edges = [a, b, a, b];
    this.name = name;
}

Square.prototype = shape;
Square.prototype.constructor = Square;

function Parallelogram(name, a, b, rad) {
    Square.call(this, name, a, b);
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
