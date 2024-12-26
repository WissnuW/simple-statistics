```markdown
# Simple Statistics Calculator

A JavaScript program that performs basic statistical calculations on a range of numbers from 1 to 20.

## Author
Wisnu Wardhana

## Last Update
December 26, 2024

## Description

This script calculates:
- Sum of all numbers in the range
- Sum of even numbers
- Sum of odd numbers
- The largest number in the range

## Features

- Range calculation from 1 to 20
- Even/Odd number detection
- Sum calculations
- Maximum value detection

## Code Example

```javascript
let start = 1;
let end = 20;
```

## Output Example

The program will display:
```javascript
Jumlah angka genap : 110    // Sum of even numbers: 110
Jumlah angka ganjil : 100   // Sum of odd numbers: 100
Angka terbesar : 20         // Largest number: 20
Jumlah semua angka : 210    // Sum of all numbers: 210
```

## How It Works

1. The program initializes variables for tracking various sums and the maximum number
2. Uses a for loop to iterate through numbers from 1 to 20
3. For each number:
   - Adds it to the total sum
   - Checks if it's even or odd and adds to respective sums
   - Updates the maximum number if current number is larger

## Variables Used

- `start`: Starting number of the range (1)
- `end`: Ending number of the range (20)
- `jumlahAngka`: Sum of all numbers
- `jumlahGanjil`: Sum of odd numbers
- `jumlahGenap`: Sum of even numbers
- `angkaBesar`: Tracks the largest number

## Requirements

- JavaScript runtime environment (Node.js or web browser)

## Usage

Simply run the JavaScript file in your preferred environment:
```bash
node stats.js
```

## License

MIT License

Copyright (c) 2024 Wisnu Wardhana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
