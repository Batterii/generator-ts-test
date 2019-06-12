exports.validateName = function(name) {
	return (/^[\w- ]+$/).test(name) ||
		'Test name may contain only word characters, dashes, and spaces';
};

exports.getFilename = function(name) {
	return name.toLowerCase().replace(/[\W_]+/g, '-');
};
