// https://github.com/jestjs/jest/issues/10322#issuecomment-1304375267

const console = require('console')
global.console = console
jest.mock('react-markdown', () => ({
    __esModule: true,
    default: ({children}) => children
}))