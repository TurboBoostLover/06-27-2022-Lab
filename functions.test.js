let functionsTest = require('./functions')

test("Two Test", () => {
    expect(functionsTest.returnTwo()).toBe(2)
})

test("greet", () => {
    expect(functionsTest.gretting('James')).toBe('Hello James.')
    expect(functionsTest.gretting('Jill')).toBe('Hello Jill.')
})

test("add", () => {
    expect(functionsTest.add(1, 2)).toBe(3)
    expect(functionsTest.add(5, 9)).toBe(14)
})