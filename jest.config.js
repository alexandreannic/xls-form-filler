/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
    // testMatch: ['**/playground.spec.ts'],
    testMatch: ['**/?(*.)+(spec|test|e2e).[tj]s'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: false,
    noStackTrace: true,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Path to your setup file
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.node.json' // or whichever config has esModuleInterop
        },
    },
    // silent: true,
    transform: {
        '^.+.tsx?$': ['ts-jest', {}],
    },
}
