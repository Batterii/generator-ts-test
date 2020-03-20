# @batterii/generator-ts-test
A [yeoman](https://yeoman.io/) generator for creating integration test blocks in
Batterii TypeScript projects.

## Usage
```
  yo @batterii/ts-test [options]

Options:
  -h,   --help           # Print the generator's options and usage
        --skip-cache     # Do not remember prompt answers             Default: false
        --skip-install   # Do not automatically install dependencies  Default: false
        --force-install  # Fail on install dependencies error         Default: false
  -n,   --name           # Name for the test block
  -f,   --filename       # Name for the test file (no extension)

```

## The Test Block Name
Like all mocha tests, integration tests must be placed in a `describe` block.
When running this generator, use the `--name` option to provide the name of this
block.

You can name the block whatever you like, but ideally it should provide some
context for the tests that will go inside it. If the tests will be exercising
the API of some public class, for example, you should name the block after that
class. If, on the other hand, you're applying various API's to a particular use
case, you should name it after that use case.

Only letters, digits, dashes, spaces, and underscores are allowed in the test
block name, simply because this subset of characters is much easier to convert
to a name for the file that will be created.

You can use the the `--filename` option to provide the name for the test file
that will be created. If you provide it, you will want to omit the extension as
`.ts` will be appended automatically. This will default to a name based on the
test block name and should not usually need to be changed.

## The Created Test File
When the generator has finished, a new file will have been created in the
`test/integration` directory. The file's name will the same as the test block
name, except converted to satisfy file naming conventions. The test block name
will also have '(Integration)' appended to it in the actual `describe` block.
Both of these measures are to ensure that tests are easy to find based on the
mocha reporter output alone.

Write your tests inside the generated `describe` block, using the
already-imported chai `expect` API.

## What about Unit Tests?
Unlike integration tests, unit tests are directly associated with a particular
class or static module, so unit test files do not have their own generator. To
create them, use [`@batterii/generator-ts-class`][1] or
[`@batterii/generator-ts-module`][2].

[1]: https://www.npmjs.com/package/@batterii/generator-ts-class
[2]: https://www.npmjs.com/package/@batterii/generator-ts-module
