export function fToC(fahrenheit: number): number {
    if (typeof fahrenheit !== "number") {
        throw new Error("Input must be a number");
    }
    return (fahrenheit - 32) * (5 / 9);
}

export default function cToF(celsius: number): number {
    if (typeof celsius !== "number") {
        throw new Error("Input must be a number");
    }
    return celsius * (9 / 5) + 32;
}