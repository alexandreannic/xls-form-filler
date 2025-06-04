/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
    // testMatch: ['**/?(*.)+(spec|test|e2e).[tj]s?(x)'],
    // testMatch: ['**/astEval.test.ts'],
    testMatch: ['**/test.spec.tsx'],
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'jsdom',
    verbose: false,
    noStackTrace: true,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Path to your setup file
    globals: {
        'ts-jest': {
            useESM: true,
            tsconfig: './tsconfig.app.json' // or whichever config has esModuleInterop
        },
    },
    transform: {
        '^.+.tsx?$': ['ts-jest', {useEsm: true}],
    },
}
