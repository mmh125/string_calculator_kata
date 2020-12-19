export function string_calc(s: string) {

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