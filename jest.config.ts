import type { Config } from 'jest';

const config: Config = {
    testEnvironment: 'node',
    roots: ['<rootDir>/test'],
    setupFilesAfterEnv: [
        '<rootDir>/test/index.ts',
    ],
    testMatch: ['**/*.test.ts'],
    testPathIgnorePatterns: [
    ].filter((file) => !process.argv.includes(file)),
    transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            isolatedModules: process.env.FAST_JEST==='1',
        }],
    },
    resetMocks: true,
    reporters: [
        ['default', {summaryThreshold: 0}],
        'github-actions',
    ],
    coverageReporters: [['text', { skipFull: true }]],
    coverageDirectory: '.',
    collectCoverageFrom: [
        '**/*.ts',
        '!test/**',
        // TODO
        '!src/bin/**',
        '!src/protobufs/**',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};

export default config;
