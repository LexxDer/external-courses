var func = function(str, num) {
	
	if (str.length > num) {
		if (num < 3) {num = 3}
		return str.slice(0,num - 3) + '...';
	} else return str;

}
