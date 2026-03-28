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

/**
 * Converts a weight from pounds to kilograms.
 * @param lb - The weight in pounds.
 * @returns The weight converted to kilograms.
 * @throws {Error} If the input is not a number.
 */
export function lbToKg(lb: number): number {
    if (typeof lb !== "number") {
        throw new Error("Input must be a number");
    }
    return lb * 0.453592;
}

/**
 * Converts a weight from kilograms to pounds.
 * @param kg - The weight in kilograms.
 * @returns The weight converted to pounds.
 * @throws {Error} If the input is not a number.
 */
export function kgToLb(kg: number): number {
    if (typeof kg !== "number") {
        throw new Error("Input must be a number");
    }
    return kg / 0.453592;
}

/**
 * Converts a volume from fluid ounces to milliliters.
 * @param flOz - The volume in fluid ounces.
 * @returns The volume converted to milliliters.
 * @throws {Error} If the input is not a number.
 */
export function flOzToMl(flOz: number): number {
    if (typeof flOz !== "number") {
        throw new Error("Input must be a number");
    }
    return flOz * 29.5735;
}

/**
 * Converts a volume from milliliters to fluid ounces.
 * @param ml - The volume in milliliters.
 * @returns The volume converted to fluid ounces.
 * @throws {Error} If the input is not a number.
 */
export function mlToFlOz(ml: number): number {
    if (typeof ml !== "number") {
        throw new Error("Input must be a number");
    }
    return ml / 29.5735;
}