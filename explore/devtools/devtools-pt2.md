1. **What was the bug?**  
   When the 2 values are passed in, they are treated as 2 strings, so the function `calculateSum` add the string representations of these two numbers.

2. **How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use)**  
   Parse `num1` and `num2` to numbers before adding them.  
   