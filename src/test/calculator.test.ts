import { string_calc } from '../main/calculator';

describe("string_calc", () => {
    it("should return the sum of inputs", () => {
        expect(string_calc("")).toBe(0);
    });
    it("should return 1 for 1", () => {
        expect(string_calc("1")).toBe(1);
    });
    it("should return 3 for 1,2", () => {
        expect(string_calc("1,2")).toBe(3);
    });

    it("should return 6 for 1,2,3", () => {
        expect(string_calc("1,2,3")).toBe(6);
    });

    it("should return 10 for 1,2,3,4", () => {
        expect(string_calc("1,2,3,4")).toBe(10);
    }); 

    it("should return 6 for 1,2,3", () => {
        expect(string_calc("1\n2,3")).toBe(6);
    });

    it("should return 6 for //;\n1,2;3", () => {
        expect(string_calc("//;\n1,2;3")).toBe(6);
    });
});