function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    return a / b;
}

interface Operation {
    name: string
    symbol: string
    operation: (a: number, b: number) => number
}

const operation: Operation[] = [
    {name: "Add", symbol: "+", operation: add},
    {name: "Subtract", symbol: "-", operation: subtract},
    {name: "Multiply", symbol: "*", operation: multiply},
    {name: "Divide", symbol: "/", operation: divide}
];

function calculate(opSymbol: string, a: number, b: number): number {
    const op = operation.find(operation => operation.symbol === opSymbol);

    if (op === undefined || op === null) {
        console.log('Unknown operation');
        return NaN;
    }
    if (op.symbol === '+') {
        return add(a, b);
    } else if (op.symbol === '-') {
        return subtract(a, b);
    } else if (op.symbol === '*') {
        return multiply(a, b);
    } else if (op.symbol === '/') {
        return divide(a, b);
    }
}
