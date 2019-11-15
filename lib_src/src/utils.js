

export function printWithStack(s) {
    const stack = new Error().stack;
    console.log(s);
    console.log(stack);
}