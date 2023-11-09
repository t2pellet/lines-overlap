import Line from "../src/line";

describe('line tests', () => {

    describe('constructing', () => {
        test('basic line', () => {
            const line = new Line(4, 5);
            expect(line.x1).toEqual(4);
            expect(line.x2).toEqual(5);
        })

        test('line with backwards points', () => {
            const line = new Line(5, 4);
            expect(line.x1).toEqual(4);
            expect(line.x2).toEqual(5);
        })
    })

    describe('equality', () => {
        test('equal', () => {
            const line1 = new Line(4, 5);
            const line2 = new Line(4, 5);
            expect(line1.equals(line2)).toBeTruthy();
        })

        test('not equal', () => {
            const line1 = new Line(4, 5);
            const line2 = new Line(4, 6);
            expect(line1.equals(line2)).toBeFalsy();
        })
    })

    describe('overlaps', () => {
        test('line1 in line2', () => {
            const line1 = new Line(4, 5);
            const line2 = new Line(3, 7);
            expect(line1.overlaps(line2)).toBeTruthy();
            expect(line2.overlaps(line1)).toBeTruthy();
        })

        // same as line2 starts in line1
        test('line1 extends to line2', () => {
            const line1 = new Line(1, 4);
            const line2 = new Line(3, 7);
            expect(line1.overlaps(line2)).toBeTruthy();
            expect(line2.overlaps(line1)).toBeTruthy();
        })

        // same as line2 extends to line1
        test('line1 starts in line2', () => {
            const line1 = new Line(5, 8);
            const line2 = new Line(3, 7);
            expect(line1.overlaps(line2)).toBeTruthy();
            expect(line2.overlaps(line1)).toBeTruthy();
        })

        test('line2 in line1', () => {
            const line1 = new Line(1, 8);
            const line2 = new Line(3, 7);
            expect(line1.overlaps(line2)).toBeTruthy();
            expect(line2.overlaps(line1)).toBeTruthy();
        });

        test('line1 equals line2', () => {
            const line1 = new Line(3, 6);
            const line2 = new Line(3, 6);
            expect(line1.overlaps(line2)).toBeTruthy();
            expect(line2.overlaps(line1)).toBeTruthy();
        })

        test('line1 touches line2', () => {
            const line1 = new Line(3, 6);
            const line2 = new Line(6, 9);
            expect(line1.overlaps(line2)).toBeTruthy();
            expect(line2.overlaps(line1)).toBeTruthy();
        })

        test('no overlap', () => {
            const line1 = new Line(1, 4);
            const line2 = new Line(5, 9);
            expect(line1.overlaps(line2)).toBeFalsy();
            expect(line2.overlaps(line1)).toBeFalsy();
        })
    })
})