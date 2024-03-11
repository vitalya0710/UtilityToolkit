# Utility Toolkit

Utility Toolkit is a collection of common utility functions for JavaScript development. This toolkit provides functions for various tasks such as string manipulation, array manipulation, and generating random numbers.

## Installation

You can install Utility Toolkit via npm:

```bash
npm install utility-toolkit
```

## Usage

```javascript
const UtilityToolkit = require('utility-toolkit');

// Example usage
console.log(UtilityToolkit.capitalizeFirstLetter('hello')); // Outputs: "Hello"
console.log(UtilityToolkit.isPalindrome('radar')); // Outputs: true
console.log(UtilityToolkit.getRandomIntInRange(1, 10)); // Outputs: Random integer between 1 and 10
console.log(UtilityToolkit.shuffleArray([1, 2, 3, 4, 5])); // Outputs: Shuffled array
```

## Available Functions

### capitalizeFirstLetter(string)

- Capitalizes the first letter of a string.

### isPalindrome(string)

- Checks if a string is a palindrome.

### getRandomIntInRange(min, max)

- Generates a random integer within the specified range (inclusive).

### shuffleArray(array)

- Shuffles the elements of an array.

## License

This package is licensed under the [MIT License](https://opensource.org/licenses/MIT).
