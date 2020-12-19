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

///////////---------------///////////---------------IMPLEMENTATION---------------///////////---------------///////////

function string_calc(s: string) {

    let delimiter = ','
    if (s === "") return 0
    if (s.startsWith("//")) {
        delimiter = s.split("\n")[0].substring(2)
        console.log(delimiter)
        s = s.substring(`//${delimiter}\n`.length);
    }

    s = s.replace('\n', ',');
    s = s.replace(delimiter, ',');

    let bits = s.split(',');

    let sum = 0;
    for (const b of bits) {
        sum += parseInt(b);
    }

    return sum;
}


