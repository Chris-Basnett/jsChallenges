const {stringSlicer} = require("../Problems/problem2")

describe("string slicer", () =>{
    test("should return 'ern' when given 'pattern' and 3", () =>{
        expect(stringSlicer("pattern", 3)).toBe("ern")
    })
    test("should return 4 when given 'patterns' and 4", () =>{
        expect(stringSlicer("pattern", 4)).toHaveLength(4)
    })
})