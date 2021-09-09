const { hello } = require('./app')

describe('Test App', () => {
    test('hello function should return user name', () => {
        expect(hello('foo')).toContain('foo')
    })
    test('hello function should return numbers', () => {
        expect(hello('foo').replace(/\D/gi, '').length).toBeGreaterThan(0)
    })
})