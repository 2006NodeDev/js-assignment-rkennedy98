/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    /*Function: objectProperties(someObj)
      Expected input: Object
      Expected output:
      Purposed: This function prints the properties and their values for the inputted object*/
      //For every property in someObj
      for (property in someObj) {
        //prints the property and it's value
        console.log(property + "has value: " + someObj[property]);
    }
  }