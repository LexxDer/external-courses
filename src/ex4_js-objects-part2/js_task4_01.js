var func = function (prop, obj) {
    
    for (var key in obj.__proto__) {
        return (key === prop) ? true : false;
    }

}
