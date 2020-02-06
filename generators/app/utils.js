const decamelize = require('decamelize');

exports.validateName = function(name) {
	return (/^[\w- ]+$/).test(name) ||
		'Test name may contain only word characters, dashes, and spaces';
};

exports.getFilename = function(name) {
	return decamelize(name).replace(/[\W_]+/g, '-');
};
