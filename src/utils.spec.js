const { hello } = require('./utils')

describe('module :: utils :: ', () => {
    test('hello function should return user name', () => {
        expect(hello('foo')).toContain('foo')
    })
})