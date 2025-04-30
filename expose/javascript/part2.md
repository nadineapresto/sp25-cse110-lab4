1. Line 12 will print `3` and is valid because `var i` is not limited to the scope of just the `for` code block and can be visible as long as the line is within `function discountedPrices`.

2. Line 13 will print `150` and is valid because `var discountedPrice`'s scope extends beyong the `for` loop, thanks to the `var` variable type which ignores scopes of code blocks.

3. Line 14 will print `150` and is valid because `var finalPrice`, like `i` and `discountedPrice`, has a scope that covers the whole function of `discountedPrices`.

4. The function will return `[50, 100, 150]` because calculations of `finalPrice` at the end of each iteration of the `for` loop are pushed as array values to `discounted`. There are no "out of scope" errors because `discounted` is declared within the function.

5. Line 12 will return an error because of `i` being declared as a `let` variable within the `for` code block, meaning that `i`'s scope is only limited to the `for` code block and cannot be accessed outside of it.

6. Line 13 will return an error because of `discountedPrice` being declared as a `let` within the `for` code block, similar reasoning as the error in line 12.

7. Line 14 will print `150` and is valid because `finalPrice` is declared as a `let` variable before the `for` loop, so it's visibility is not limited to that code block.

8. The function will still return `[50, 100, 150]` despite changing the variables to `let`. While line 12 and line 13 cannot access variables `i` and `discountedPrice` because they are out of the scope, the logic inside of the `for` code block is valid and stored in their respective variables. So the pushes to `discounted` in the `for` loop are stored and accessible outside of the `for` loop because `discounted` is declared outside of the `for` loop.

9.  Line 11 will return an error because `i` is declared as a `let` variable so it is block-scoped to the `for` loop so it is unaccessible after exiting the `for` loop.

10. Line 12 will print `3` and is valid because the `const length` is initialized with `prices.length` at the beginning of the function call and the program doesn't try to rewrite it and `length` is still within the scope for it to be accessed by line 12.

11. The function will still return `[50, 100, 150]` despite `discounted` being declared as a `const` variable type. While we cannot fully rewrite a whole `const` array, using functions such as `push` are valid to use. 

12. (A) `student.name;`

    (B) `student['Grad Year'];`

    (C) `student.greeting();`

    (D) `student['Favorite Teacher'].name;`

    (E) `student.courseLoad[0];`

13. (A) `'3' + 2` outputs `'32'` because the binary `+` operator with the first string operand triggers string concatenation so the second operand, number `2`, is coverted to a a string `'2'` and appended to the end of string `'3'`.

    (B) `'3' - 2` outputs `1` because the binary `-` operator automatically converts operands to numeric values regardless of if their original data type, so string `'3'` is converted to the number `3` and the number `2` is subtracted from it. 

    (C) `3 + null` outputs `3` because it uses the `+` operator, but neither operand is a string so there is no string concatenation. Instead since `3` is already a number, `null` is converted to the number `0` and the compiler calculates the expression as `3 + 0`.

    (D) `'3' + null` outputs `'3null'` because the operator `+` and string operand `'3'` trigger string concatenation and causes `null` to convert to a string, making string `'null'` append to the end of string `'3'`.

    (E) `true + 3` outputs `4` because the `+` operator simply converts the operands to numeric values if neither is a string and the calculation doesn't use string concatentation. So since `true` has the numeric value equivalent to the number `1`, the compiler calculates `1 + 3`.

    (F) `false + null` outputs `0` because the `+` operator takes the numeric values of both operands (because neither is a string) and since `false` becomes `0` and `null` also becomes `0`, the calculation is `0 + 0`.

    (G) `'3' + undefined` outputs `'3undefined'` because the `+` operator and first operand being a string forces the second operand to convert to a string as well. So `undefined` is converted to string `'undefined'` and appended to the end of string `'3'`.

    (H) `'3' - undefined` outputs `NaN` because the `-` operator doesn't do string concatenation and instead operates on the converted numeric values of the operands. So string `'3'` becomes number `3` and `undefined` becomes `NaN` so the compiler computes `3 - NaN`.

14. (A) `'2' > 1` outputs `true` because string `'2'` is converted to the number `2` and `2` is greater than `1`.

    (B) `'2' < '12'` outputs `false` because when both operands are strings, the operands are compared in lexicographical or dictionary order, so since `'2'` comes before `'12'`, it returns `false`.

    (C) `2 == '2'` outputs `true` because `==` converts string `'2'` to the number `2` and determines if `2` is equal to `2`.

    (D) `2 === '2'` outputs `false` because `===` unlike `==` doesn't perform type conversion and simply returns `false` if two operands are not of the same data type.

    (E) `true == 2` outputs `false` because `==` coerces `true` to convert to the numerical value of `1` and asks if `1` is equal to `2`.

    (F) `true === Boolean(2)` outputs `true`.

15. The regular equality check `==` automatically tries to convert operands of different types to numbers which causes variables such as an empty string to become zero and then it compares the values. The strict equality check `===` doesn't try to convert the operands and simply returns `false` if the operands are of different data types and only returns `true` when both operands are of the same type and value.

16. [Link to question 16 solution file.](part2-question16.js)

17. The function `modifyArray` takes an `array` and a `callback`, creates a new empty array `newArr`and then loops through each element of the passed in variable `array`. For each iteration of the `for` loop, the `callback` with the current array value is called and pushed into `newArr`. When the `for` loop is completed, `newArr` is returned. The function `doSomething` simply doubles and returns the numeric value `num` that is passed into it. So when we run `modifyArray([1, 2, 3], doSomething);`, the `doSomething` function is called to apply to each element of the array so the final resulting array is `[2, 4, 6]`.

18. [Link to question 18 solution file.](part2-question18.js)

19. The output of the program will look like this:
    ```
    1
    4
    3
    2
    ```