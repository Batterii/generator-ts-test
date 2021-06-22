const decamelize = require("decamelize");

exports.validateName = function(name) {
	return (/^[\w- ]+$/).test(name) ||
		"Test name may contain only word characters, dashes, and spaces";
};

exports.validateFilename = function(filename) {
	return (/^[a-z0-9-]+$/).test(filename) ||
		"File name must be dash-separated lower case";
};

exports.getDefaultFilename = function(name) {
	return decamelize(name, "-").replace(/[\W_]+/g, "-");
};
