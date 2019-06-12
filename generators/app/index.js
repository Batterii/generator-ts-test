const { getFilename, validateName } = require('./utils');
const { Generator } = require('@batterii/yeoman-helpers');

class TestGenerator extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.optionPrompt({
			type: 'input',
			name: 'name',
			alias: 'n',
			description: 'Name for the test block',
			message: 'Enter a name for the test block.',
			validate: validateName,
		});
	}

	addTest() {
		// Create the filename from the name option.
		const filename = getFilename(this.options.name);

		// Create the new test file in the integration test directory.
		this.copyTemplate('test.ts', `test/integration/${filename}.ts`);
	}
}

module.exports = TestGenerator;
