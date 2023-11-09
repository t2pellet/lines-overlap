import Line from "./line";

const LINE_REGEX = /^\s*\(?(\d*(\.\d*)?)\s*,\s*(\d*(\.\d*)?)\)?\s*$/

export class InvalidArgError extends Error {
    readonly name: string
    readonly value: string
    readonly format: string

    constructor(name: string, value: string, format: string) {
        super(`Invalid argument ${name}: ${value}\nShould be of format: ${format}`);
        this.name = name;
        this.value = value;
        this.format = format;
    }
}

function parseLine(name: string, line: string): Line {
    const match = LINE_REGEX.exec(line);
    if (match == null || match.length != 5) {
        throw new InvalidArgError(name, line, '(x1, x2)');
    }
    const x1 = match[1];
    const x2 = match[3];
    return new Line(Number(x1), Number(x2));
}

export default parseLine;