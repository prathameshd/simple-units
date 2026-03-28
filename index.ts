/**
 * Converts a temperature from Fahrenheit to Celsius.
 * @param fahrenheit - The temperature in degrees Fahrenheit.
 * @returns The temperature converted to degrees Celsius.
 * @throws {Error} If the input is not a number.
 */
export function fToC(fahrenheit: number): number {
    if (typeof fahrenheit !== "number") {
        throw new Error("Input must be a number");
    }
    return (fahrenheit - 32) * (5 / 9);
}

/**
 * Converts a temperature from Celsius to Fahrenheit.
 * @param celsius - The temperature in degrees Celsius.
 * @returns The temperature converted to degrees Fahrenheit.
 * @throws {Error} If the input is not a number.
 */
export default function cToF(celsius: number): number {
    if (typeof celsius !== "number") {
        throw new Error("Input must be a number");
    }
    return celsius * (9 / 5) + 32;
}