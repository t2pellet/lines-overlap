class Line {
    public x1: number
    public x2: number

    constructor(x1: number, x2: number) {
        this.x1 = Math.min(x1, x2);
        this.x2 = Math.max(x1, x2);
    }
    
    public overlaps(line: Line) {
        return this.x1 <= line.x1 && line.x1 <= this.x2
            || this.x1 <= line.x2 && line.x2 <= this.x2
            || line.x1 <= this.x1 && this.x1 <= line.x2
            || line.x1 <= this.x2 && this.x2 <= line.x2
    }

    public equals(obj: Line): boolean {
        return this.x1 === obj.x1 && this.x2 === obj.x2;
    }
}

export default Line;