const {elementFinder} = require("../problems/problem5")
describe("element finder", () =>{
    test("should return bravo when given ['alpha', 'bravo', 'charlie'] and 2", () =>{
        const testArray = ['alpha', ' bravo', 'charlie']
        expect(elementFinder(testArray, 2)).toBe('bravo')
    })
    test("should return charlie when given ['alpha', 'bravo', 'charlie'] and 3", () =>{
        const testArray = ['alpha', 'bravo', 'charlie']
        expect(elementFinder(testArray, 3)).toBe('charlie')
    })
})