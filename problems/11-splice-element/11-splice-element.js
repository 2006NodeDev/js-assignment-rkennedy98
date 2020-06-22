/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    /*Expected input: Array, Number
      Expected output:
      Purpose: This function returns the element specified by index in the array sent in.*/
    //replaced by some array: const months = ['Jan', 'March', 'April', 'June'];
    return someArr.splice(index, 1);
  }
  
  console.log(spliceElement(["Jan", "Feb", "March", "April","May", "June", "July", "August", "September", "November", "December"],5))