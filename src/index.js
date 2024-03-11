// utility-toolkit.js

const UtilityToolkit = {
    // Function to capitalize the first letter of a string
    capitalizeFirstLetter: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  
    // Function to check if a string is palindrome
    isPalindrome: function (string) {
      const reversedString = string.split('').reverse().join('');
      return string === reversedString;
    },
  
    // Function to generate a random integer within a range
    getRandomIntInRange: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  
    // Function to shuffle an array
    shuffleArray: function (array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  };
  
  // Export the UtilityToolkit object for use in Node.js or browser environments
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = UtilityToolkit;
  } else {
    window.UtilityToolkit = UtilityToolkit;
  }
  