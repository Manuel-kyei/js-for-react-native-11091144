Array Manipulation and User Profile Creation

 Student ID: 11091144

This project includes three tasks related to array manipulation and user profile creation using JavaScript.

 Task 1: Array Processing

In the "arrayManipulation.js" file, a function named "processArray" is defined. This function takes an array of numbers as an argument and returns a new array where each even number is squared, and each odd number is tripled.

 Task 2: String Formatting

In the same "arrayManipulation.js" file, another function named "formatArrayStrings" is added. This function takes two arrays as arguments:

1. An array of strings.
2. An array of numbers processed by the `processArray` function.

The "formatArrayStrings" function modifies each string based on its corresponding number. If the number is even, the entire string is capitalized. If the number is odd, the string is converted to lowercase.

 Task 3: User Profile Creation

In the "userInfo.js" file, a function named "createUserProfiles" is defined. This function takes two arguments:

1. An array of names.
2. The array of modified names from Task 2.

The "createUserProfiles" function returns an array of objects, where each object contains the following properties:

- "originalName" : The original name from the input array.
- "modifiedName" : The modified name from the array created in Task 2.
- "id" : An auto-incremented unique identifier starting from 1.
