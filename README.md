# simple-units-converter

A lightweight TypeScript package for unit conversions — temperature, weight, and volume.

## Installation

```bash
npm install simple-units-converter
```

## Usage

```ts
import cToF, { fToC, lbToKg, kgToLb, flOzToMl, mlToFlOz } from "simple-units-converter";

// Temperature
cToF(100);      // 212
fToC(212);      // 100

// Weight
lbToKg(10);     // 4.53592
kgToLb(4.53592) // ~10

// Volume
flOzToMl(8);    // 236.588
mlToFlOz(236.588); // ~8
```

## API

### Temperature

#### `cToF(celsius: number): number`

Converts a temperature from Celsius to Fahrenheit.

| Parameter | Type     | Description                    |
|-----------|----------|--------------------------------|
| `celsius` | `number` | Temperature in degrees Celsius |

**Returns:** Temperature in degrees Fahrenheit.

**Throws:** `Error` if the input is not a number.

---

#### `fToC(fahrenheit: number): number`

Converts a temperature from Fahrenheit to Celsius.

| Parameter    | Type     | Description                       |
|--------------|----------|-----------------------------------|
| `fahrenheit` | `number` | Temperature in degrees Fahrenheit |

**Returns:** Temperature in degrees Celsius.

**Throws:** `Error` if the input is not a number.

---

### Weight

#### `lbToKg(lb: number): number`

Converts a weight from pounds to kilograms.

| Parameter | Type     | Description       |
|-----------|----------|-------------------|
| `lb`      | `number` | Weight in pounds  |

**Returns:** Weight in kilograms.

**Throws:** `Error` if the input is not a number.

---

#### `kgToLb(kg: number): number`

Converts a weight from kilograms to pounds.

| Parameter | Type     | Description         |
|-----------|----------|---------------------|
| `kg`      | `number` | Weight in kilograms |

**Returns:** Weight in pounds.

**Throws:** `Error` if the input is not a number.

---

### Volume

#### `flOzToMl(flOz: number): number`

Converts a volume from fluid ounces to milliliters.

| Parameter | Type     | Description            |
|-----------|----------|------------------------|
| `flOz`    | `number` | Volume in fluid ounces |

**Returns:** Volume in milliliters.

**Throws:** `Error` if the input is not a number.

---

#### `mlToFlOz(ml: number): number`

Converts a volume from milliliters to fluid ounces.

| Parameter | Type     | Description             |
|-----------|----------|-------------------------|
| `ml`      | `number` | Volume in milliliters   |

**Returns:** Volume in fluid ounces.

**Throws:** `Error` if the input is not a number.

---

## License

ISC
