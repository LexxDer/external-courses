var func = function(str) {
	
	str = str.split(' ');
	
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].slice(1);
	}
	
	return str.join(' ');

}
