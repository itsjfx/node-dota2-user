# Testing Dota2User

This directory contains tests for the Dota2User library.

## Running Tests

### With npm (default)

```bash
npm test
```

This uses the `./bin/test` script which runs Jest with the `--randomize` flag.

### With Bun

```bash
bun run test:bun
# or
bun test
```

## Test Structure

- `test/src/Dota2User.test.ts` - Tests for the core Dota2User class functionality
- `test/src/Dota2User.jobs.test.ts` - Tests for the job handling functionality
- `test/src/Dota2User.getNextJobId.test.ts` - Tests for the job ID generation functionality
- `test/src/Router.jobs.test.ts` - Tests for the router job event handling

## Job Functionality Tests

The job functionality tests verify:

1. Job ID generation and cycling
2. Job callback registration and invocation
3. Proper routing of GC messages with job IDs
4. Cleanup of completed jobs

Note: When running tests with `bun test`, you may see some failures in the existing tests due to differences in how Bun's test runner handles accessor property mocking compared to Jest. This is expected and does not affect the functionality tests for the job handling feature.
