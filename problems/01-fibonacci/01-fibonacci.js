/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    /*Function: fib(n)
      Expected input: number
      Expected output: number
      Purpose: The purpose of this function is to return the fibonacci 
      number in the nth place.*/
    var arr =[];
    //define array
    if(n < 2)
        arr[0] = 0;
    else{
        arr[0] = 0;
        arr[1] = 1;
        //starting at 2, calculate the rest of the values until n
        for(let i = 2; i <= n; i++){
            //push the calculated value into the array
            arr[i] = arr[i - 2] + arr[i - 1];
        }
        //return the calculated array of fibonacci numbers
        return arr[n]
    }
  }
  
  console.log(fib("5"));
  console.log(fib("7"));