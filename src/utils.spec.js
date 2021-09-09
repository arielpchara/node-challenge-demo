const { hello } = require('./utils')

describe('Test Utils', () => {
    test('hello function should return user name', () => {
        expect(hello('foo')).toContain('foo')
    })
})