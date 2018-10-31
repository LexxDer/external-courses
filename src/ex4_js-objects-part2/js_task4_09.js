var func = function(str, str1, num) {
	
	str = str.split(' ');
	str.splice(num + 1, 0, str1);	
	
	return str.join(' ');

}
