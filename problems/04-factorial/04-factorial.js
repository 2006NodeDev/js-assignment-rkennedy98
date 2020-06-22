/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(someNum) {
    /*Function: factorial(someNum)
      Expected input: Number
      Expected output: Number
      Purpose: The purpose of this function is to compute 
      and return the factorial of sumNum*/  
    //Returns 1 if sumNum == 0
    if(someNum == 0){
        return 1;
    }
    //Sets the initial value of factorial to sumNum
    let factorial = someNum;
    //Multiplies a number and increments down before looping again,
    //skips 1 since anything multiplied by 1 is the original number
    for(int i = someNum - 1; i > 1; i--){
        factorial *= i;
    }
    return factorial
  }
  
  console.log(factorial(8));