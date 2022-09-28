const {arrayGenerator} = require("../problems/problem4")
describe("array generator", () =>{
    test("should return an array of [1,2,3] when given 1,3 as an arguement", () =>{
        expect(arrayGenerator(1,3)).toEqual([ 1, 2, 3])
    })
    test("should return an array of [-2,-1,0,1,2,3,4] when given -2,4 as an arguement", () =>{
        expect(arrayGenerator(-2,4)).toEqual([ -2, -1, 0, 1, 2, 3, 4])
    })
})