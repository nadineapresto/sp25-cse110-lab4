1. Line 9 prints `values added: 20`.
2. Line 13 prints `final result: 20`.
3. Even though `var result` is declared within the `if` code block, since `var` ignores code blocks/visible through code blocks, then line 13, which is outside of the `if` code block, can still validly use `result`. This can be harmful because `result` becomes a function-level variable that is visible outside of the scope of the `if` code block which can cause complications when implementing further logic after the `if` code block while still in the `sumValues` function.
4. Line 9 prints `values added: 20`.
5. Line 13 returns an error because `let result` is declared within the `if` code block and since it uses `let`, then `result` does not exist out outside of the `if` code block, so line 13 is out of `result`'s scope. 
6. Line 7 returns an error because the `const` variable cannot be reassigned and will throw an exception when trying to do so. So line 9 will never even be reached in the program due to the error in line 7.
7. Same logic applies to line 13; line 13 is never reached because of the error at line 7.