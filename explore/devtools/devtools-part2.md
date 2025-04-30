1. The bug was that `num1` and `num2` were taken as string data types so the `+` operator performed string concatenation appending the second number to the end of the first number so `result` was a string. So for example, I filled in `1` for the first number and `2` for the second number, but instead of adding the values, it outputs `12` because they are recognized in the program as strings.

2. To fix this, we can convert the string values into numerical values in the `calculateSum` function so that when the `+` operator is used, it doesn't perform string concatenation:
   ```
   function calculateSum(num1, num2) {
    let result = Number(num1) + Number(num2);
    return result; 
    }
    ```