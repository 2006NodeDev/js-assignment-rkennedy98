/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    /*Function: isEven(someNum)
      Expected input: Number
      Expected output: Boolean
      Purpose: The purpose of this function is to return if someNum is even or not*/
    //Loops until someNum is 
    while(someNum){
        //if someNum is negative, make it positive
        if(someNum < 0){
            someNum *= -1;
        }
        var isEven = true; 
        for (var i = 0;  i < someNum; i++)  
            isEven = !isEven; 
        return isEven; 
    }
  }
  
  console.log(isEven(5));
  console.log(isEven(-4));