const { longestWord } = require("../problems/problem1")
describe("longestWord", () =>{
    test("shoould return developer", () =>{
        const testArray = ["i", "dog", "developer", "food"]
        expect(longestWord(testArray)).toBe("developer")
    })
    test("should return a value with length 5", () =>{
        const testArray = ["i", "dog", "brood", "food"]
        expect(longestWord(testArray)).toHaveLength(5)
    })
})