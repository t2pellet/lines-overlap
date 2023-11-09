import parseLine, {InvalidArgError} from "./parse";

const args = process.argv.slice(2);
if (args.length != 2) {
    console.error('Expected two arguments');
    console.error('<line_1>: (x1,x2)');
    console.error('<line_2>: (x3, x4)');
    process.exit(1);
}

try {
    const line1 = parseLine('<line_1>', args[0]);
    const line2 = parseLine('<line_2>', args[1]);
    console.log(line1.overlaps(line2));
} catch (e) {
    const argError = e as InvalidArgError;
    console.error(`Invalid argument ${argError.name}: ${argError.value}`)
    console.error(`Must have format: ${argError.format}`)
    process.exit(1);
}
