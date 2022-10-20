1. **What will happen at line 12 and why? If the code causes an error, explain why.**  
   It will print out 3 because `i` because the length of prices is 3 and that is when the for loop terminates.  

2. **What will happen at line 13 and why? If the code causes an error, explain why.**  
   It will print out 150 because during the last iteration of the for loop, `prices[i]` is 300 and discount `discount` is 0.5, so `discountedPrice` equals to 150.  

3. **What will happen at line 14 and why? If the code causes an error, explain why.**  
   It will print out 150 because during the last iteration of the for loop, `discountedPrice` is 150, so after the calculation at line 8, `finalPrice` will be 150.  

4. **What will this function return? Give a brief explanation why. If the code causes an error, explain why.**  
   It will return [50, 100, 150] because in the 3 iterations of the for loop, `finalPrice` is calculated as 50, 100, 150 respectively, and each `finalPrice` is pushed to `discounted`, which is what is returned.  

5. **What will happen at line 12 and why?  If the code causes an error, explain why. (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5))**  
   The code returns an error because `i` is declared as a `let` and line 12 is not in the scope that `i` is declared.  

6. **What will happen at line 13 and why? If the code causes an error, explain why.**  
   The code returns an error because `discountedPrice` is declared as a `let` and line 13 is not in the scope that `discountedPrice` is declared.

7. **What will happen at line 14 and why? If the code causes an error, explain why.**  
   It will print out 150 because during the last iteration of the for loop, `discountedPrice` is 150, so after the calculation at line 8, `finalPrice` will be 150. Even though `finalPrice` is declared as a `let`, line 14 is in the same scope that `finalPrice` is declared, so it can still be accessed at line 14.  

8. **What will this function return? Give a brief explanation. If the code causes an error, explain why.**  
   It will return [50, 100, 150] because in the 3 iterations of the for loop, `finalPrice` is calculated as 50, 100, 150 respectively, and each `finalPrice` is pushed to `discounted`, which is what is returned. Even thought `discounted` is declared as a `let`, where it is returned is in the same scope that `discounted` is declared, so it can still be accessed when the function returns it.  

9. **What will happen at line 11 and why? If the code causes an error, explain why.**  
    The code returns an error because `i` is declared as a `let` and line 12 is not in the scope that `i` is declared.  

10. **What will happen at line 12 and why? If the code causes an error, explain why.**  
    It will print out 3 because `length` is a `const` that is set to `price.length`, which is 3 in this case. Since `length` is never changed, the code does not cause an error at line 12.  

11. **What will this function return? Give a brief explanation. If the code causes an error, explain why.**  
    It will return [50, 100, 150]. Even though `discounted` (what is returned) is declared as a `const`, the code only pushes numbers into it and never reassigns it.  

12. **Given the above Object, write the notation for:  (These should be in your part2.md)**  
    
    A. **Accessing the value of the name property in the student object**  
    `student.name`  

    B. **Accessing the value of the Grad Year property in the student object**  
    `student['Grad Year']`  

    C. **Calling the function for the greeting property in the student object**  
    `student.greeting();`  
    
    D. **Accessing the name property of the object in the Favorite Teacher property in student**  
    `student['Favorite Teacher'].name`  

    E. **Access the first index in the array of the courseLoad property of the student object**  
    `student.courseLoad[0]`  


13. **Arithmetic**  
    A. **`‘3’ + 2`** = '32' since 2 is converted to string '2'  

    B. **`‘3’ - 2`**  = 1 since '3' is converted to integer 3  

    C. **`3 + null`** = 3 since null is 0 in numeric conversion  

    D. **`‘3’ + null`** = '3null' since null is converted to string 'null'  

    E. **`true + 3`** = 4 since true is 1 in numeric conversion  

    F. **`false + null`** = 0 since false is 0 in numeric conversion and null is also 0 in numeric conversion  

    G. **`'3' + undefined`** = 3undefined since undefined is converted to string 'undefined'  
    
    H. **`'3' - undefined`** = NaN since undefined is NaN (Not a Number) in numeric coversion  

14. **Comparison**  
    A. **`'2' > 1`** = true since string '2' is converted to integer 2  

    B. **`'2' < '12'`** = false since the first character of '2' is '2', the first character of '12' is '1', and '2' is greater than '1'  

    C. **`2 == '2'`** = true since string '2' is converted to integer 2  

    D. **`2 === '2'`** = false since === is strict equality operator which check the equality without type conversion

    E. **`true == 2`** = false since true is converted to integer 1  

    F. **`true === Boolean(2)`** = true since Boolean(2) is converted to true  

15. **Explain the difference between the == and === operators.**  
    `==` checks the equality with type conversion, and `===` checks the equality without type conversion  

16. **Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)**  
    See file part2-question16.js  

17. **If the function above is called with the following parameters `modifyArray([1,2,3], doSomething)`, what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.**  
    In `modifyArray`, the `newArr` is first initialized to an empty array as a `const`. Then, the for loop loops through each element in `array`. For each element `array[i]`, `callback` function that is passed in as a parameter is called with `array[i]` as parameter and the result is pushed to the array `newArr`. In this case, the `callback` is the function `doSomething`, which multiplies the value passed in by 2. Thus, for each element of `array[i]`, `array[i] * 2` is pushed into `newArr`. Then, the function `modifyArray` returns `newArr`. Therefore, the result of `modifyArray([1,2,3], doSomething)` is [2, 4, 6].

18. **The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part2-question18.js)**  
    See file part2-question18.js
19. What is the output of the above code? (This should be in your part2.md)  
    1  
    4  
    3  
    2  
    