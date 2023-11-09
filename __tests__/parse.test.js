import Line from "../src/line";
import parseLine, {InvalidArgError} from "../src/parse";

describe('parse tests', () => {
    const line = new Line(4, 6);

    test('basic parse', () => {
        const lineStr = '(4,6)';
        const parsedLine = parseLine('<line>', lineStr);
        expect(parsedLine).toEqual(line);
    })

    test('parse without parantheses', () => {
        const lineStr = '4,6';
        const parsedLine = parseLine('<line>', lineStr);
        expect(parsedLine).toEqual(line);
    })

    test('parse with extraneous spacing', () => {
        const lineStr = '  (4 ,   6) ';
        const parsedLine = parseLine('<line>', lineStr);
        expect(parsedLine).toEqual(line);
    })

    test('parse with backwards line', () => {
        const lineStr = '(6,4)';
        const parsedLine = parseLine('<line>', lineStr);
        expect(parsedLine).toEqual(line);
    })

    test('parse with decimal point', () => {
        const lineStr = '(4.5,6.9)';
        const parsedLine = parseLine('<line>', lineStr);
        expect(parsedLine).toEqual(new Line(4.5, 6.9));
    })

    test('parse with two lines', () => {
        const lineStr = '(4,6) (8,9)';
        expect(() => parseLine('<line>', lineStr)).toThrow();
    })

    test('parse with 3 points', () => {
        const lineStr = '(4,6,9)';
        expect(() => parseLine('<line>', lineStr)).toThrow();
    })

    test('parse with invalid point', () => {
        const lineStr = '(4a,6)';
        expect(() => parseLine('<line>', lineStr)).toThrow();
    })

    test('parse with only one point', () => {
        const lineStr = '(5)';
        expect(() => parseLine('<line>', lineStr)).toThrow();
    })

    test('parse with two decimal point', () => {
        const lineStr = '(4.5.7,6.9)';
        expect(() => parseLine('<line>', lineStr)).toThrow();
    })
})