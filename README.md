# simple-units-converter

A lightweight TypeScript package for temperature unit conversions.

## Installation

```bash
npm install simple-units-converter
```

## Usage

```ts
import cToF, { fToC } from "simple-units-converter";

cToF(100);  // 212
fToC(212);  // 100
```

## API

### `cToF(celsius: number): number`

Converts a temperature from Celsius to Fahrenheit.

| Parameter | Type     | Description                     |
|-----------|----------|---------------------------------|
| `celsius` | `number` | Temperature in degrees Celsius  |

**Returns:** Temperature in degrees Fahrenheit.

**Throws:** `Error` if the input is not a number.

---

### `fToC(fahrenheit: number): number`

Converts a temperature from Fahrenheit to Celsius.

| Parameter     | Type     | Description                       |
|---------------|----------|-----------------------------------|
| `fahrenheit`  | `number` | Temperature in degrees Fahrenheit |

**Returns:** Temperature in degrees Celsius.

**Throws:** `Error` if the input is not a number.

## License

ISC
