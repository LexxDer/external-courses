var func = function(obj) {
    var key;
    for (key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
