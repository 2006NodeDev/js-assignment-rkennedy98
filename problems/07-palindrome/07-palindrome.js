/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    /*Function: isPalindrome(someStr)
      Expected input: String
      Expected output: Boolean
      Purpose: The purpose of this function is to return whether a string is a palindrome.*/
    //splits the string into an array
    var strArr = someStr.split("");
    //reverses the array
    var reverseArr = strArr.reverse();
    //joins the new array into a string
    var reverseStr = reverseArr.join("");
    //determines if the string is a palindrome
    if(someStr == reverseStr)
        return true;
    else   
        return false;
}

function testIsPalindrome_EmptyString(){
  var test="racecar";
  var expected=true;
  var actual=isPalindrome(test);
  if(expected == actual) {
      console.log("Pass");
  } else {
      console.log("Fail");
  }
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("rachel"));