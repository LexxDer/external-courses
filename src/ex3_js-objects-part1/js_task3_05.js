var func = function(obj) {
    var copyObj = {};
    var key;
    for (key in obj) {
        copyObj[key] = obj[key];
    }
    return copyObj;
}
