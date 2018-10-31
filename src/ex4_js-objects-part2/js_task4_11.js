var func = function(str) {
    
    var result = {};
    
    for (var i = 0; i < str.length; i++) {
        
        if (result[str[i]] === undefined) {
            result[str[i]] = 0;
        }

        result[str[i]] += 1;
    
    }

    return result;

}
