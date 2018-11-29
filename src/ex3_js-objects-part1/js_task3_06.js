var f = function(obj) {
    var copyObj;
    var key
    Array.isArray(obj) ? copyObj = [] : copyObj = {};
    for (key in obj) {
        if (typeof obj[key] === "object"){
            copyObj[key] = f(obj[key]);
        }
        else copyObj[key] = obj[key];
    }
    return copyObj;
}
