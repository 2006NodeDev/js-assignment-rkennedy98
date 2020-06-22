/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    /*Function: substring(someStr, startIndex, endIndex)
      Expected input: String, Number, Number
      Expected output: String
      Purpose: The purpose of this function is to return a substring*/
    //If the values are the right type, proceed
    if(typeof someStr ==='string' && typeof startIndex === 'number' && typeof startIndex === 'number'){
        //if the indexes are numbers greater than the length of the entered string
        //then throw an exception stating that the input is invalid
        if(startIndex > someStr.length -1 || endIndex > someStr.length -1){
            throw "Your indexes exceed the length of the String. Please try again.";
            return;
        }
        //else if the indexes are negative, throw an exception
        else if(startIndex < 0 || endIndex < 0){
            throw "Your indexes are negative. Please try again.";
            return;
        }
        //else if endIndex is before startIndex
        else if(startIndex > endIndex){
            throw "Your endIndex preceeds your startIndex. Please try again.";
            return;
        }
        //is an input of ('hello', 0, 0) invalid?
        //else if the indexes are the same
        else if(startIndex==endIndex){
            throw "Your indexes should not be the same value. Please try again.";
            return;
        }
        //if the input is fine, get the substring
        else{
            //splits the string into an array
            var strArr = someStr.split("");
            var subStrArr;
            let i = 0;
            while(startIndex + i < endIndex){
                subStrArr[i] = strArr[startIndex + i];
                i++;
            }
            var subStr = subStrArr.join("");
            return subStr;
        }
    }
    //If the values are not the right type, throw an exception
    else{
        throw "Your input should be in the format of String, Int, Int. Please try again."
        return
    }
  }
  
  console.log(substring("Ding Dong",1,4));