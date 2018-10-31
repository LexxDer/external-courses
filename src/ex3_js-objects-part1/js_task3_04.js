var func = function(string, obj) {
    if (!(string in obj)) {
        obj[string] = 'new';
    }
    return obj;
}
