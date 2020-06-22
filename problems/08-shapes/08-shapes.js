/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  /*Function: printShape(shape, height, character)
    Expected input: String, Number, Char
    Expected output: 
    Purpose: The purpose of this function is to print the specified shape in console*/
  switch (shape) {
    //If Square
    case "Square":
      let line = ""
      //Makes the rows
      for (let i = 1; i <= height; ++i) {
          line += character
      }
      //Prints the rows to make a square
      for (let i = 1; i <= height; ++i) {
        console.log(line)
      }
      break;
    //If Triangle
    case "Triangle":
      let line2 = ""
      //Make the rows
      for (let i = 1; i <= height; ++i) {
        line2 += character
        //Print the rows to make a triangle
        console.log(line2)
      }
      break;
    //If Diamond
    case "Diamond":
      n = (height - 1) / 2
      //Makes the rows
      for (let i = 0; i <= n; i++) {
        printDiamond(2 - i, 1 + 2 * i, character)
      }
      for (let i = 1; i < n; i++) {
        printDiamond(i, -2 * i + 5, character)
      }
      break;
    //If none of the above, invalid shape
    default:
      console.log("The input is an invalid shape")
      break;
    }
  }
  //Prints the diamond when called
  function printDiamond(shape, height, character){
    let line3 = ""
    for (let i = 0; i < shape; i++) {
      line3 += " "
    }
    for (let i = 0; i < height; i++) {
      line3 += character
    }
    for (let i = 0; i < character; i++) {
      line3 += ""
    }
    console.log(line3)
  }

//Testing  
printShape("Square", 4, "+");
printShape("Triangle", 3, "&");
printShape("Diamond", 9, "^");
printShape("Circle", 5, "=");