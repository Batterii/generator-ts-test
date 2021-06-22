const {
	getDefaultFilename,
	validateFilename,
	validateName,
} = require("./utils");
const {Generator} = require("@batterii/yeoman-helpers");

class TestGenerator extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.optionPrompt({
			type: "input",
			name: "name",
			alias: "n",
			description: "Name for the test block",
			message: "Enter a name for the test block.",
			validate: validateName,
		});

		this.optionPrompt({
			type: "input",
			name: "filename",
			alias: "f",
			description: "Name for the test file (no extension)",
			message: "Enter a name for the test file (no extension)",
			default: () => getDefaultFilename(this.options),
			validate: validateFilename,
		});
	}

	addTest() {
		// Create the new test file in the integration test directory.
		this.copyTemplate(
			"test.ts",
			`test/integration/${this.options.filename}.ts`,
		);
	}
}

module.exports = TestGenerator;
