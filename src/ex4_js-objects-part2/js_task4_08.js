var func = function(str) {
		
	str = str.split(' ');
	str[0] = str[0].toLowerCase();
	
	for (var i = 1; i < str.length; i++) {
		str[i] = str[i].toLowerCase();
		str[i] = str[i][0].toUpperCase() + str[i].slice(1);
	}
	
	return str.join('');

}
