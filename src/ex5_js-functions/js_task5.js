function makeCalculator() {
    var result = 0;

    function func(){
        return result;
    }

    func.getResult = function() {
        return result;
    }
    
    func.reset = function() {
        return result = 0;
    }

    func.add = function(a) {
        result += a || 0;
          
        function f(b) {
            result += b || 0;
            return f;
        }
          
        return f;
    };

    func.subtract = function(a) {
        result -= a || 0;
          
        function f(b) {
            result -= b || 0;
            return f;
        }
            
        return f;
    };
    
    func.divide = function(a) {
        
        if (result === 0) {
            result = a || 0;     
        } else result /= a || 0;
          
        function f(b) {
            result /= b || 0;
            return f;
        }
            
        return f;
    };

    func.multiply = function(a) {
 
        if (result === 0) {
            result = a || 0;     
        } else result *= a || 0;
          
        function f(b) {
            result *= b || 0;
            return f;
        }
            
        return f;
    };
                    
    return func;
}

var calculator = makeCalculator();

console.log(calculator.getResult());
calculator.multiply(3)(3);
console.log(calculator.getResult());
calculator.add(3);
console.log(calculator.getResult());
calculator.divide(3)(3);
console.log(calculator.getResult());