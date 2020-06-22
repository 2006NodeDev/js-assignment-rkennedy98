/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  /*Function: reverseStr(someStr)
    Expected input: String
    Expected output: Reversed String
    Purpose: The purpose of this function is to reverse and return a String*/
    //splits the string into an array
    var strArr = someStr.split("");
    //reverses the array
    var reverseArr = strArr.reverse();
    //joins the new array into a string
    var reverseStr = reverseArr.join("");
    //returns the result
    return reverseStr;
}

console.log(reverseStr("rachel"));