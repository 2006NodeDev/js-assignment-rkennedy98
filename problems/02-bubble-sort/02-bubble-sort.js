/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    /*Function: bubbleSort(numArray)
      Expected input: number array
      Expected output: sorted number array
      Purpose: The purpose of this function is to sort the given
      array using Bubble Sort.*/
    let swapped;
    do {
      //sets swapped to false
      swapped = false;
      for (let i = 0; i < numArray.length; i++) {
        //swaps if the next element is less than the current one
        if (numArray[i] > numArray[i + 1]) {
          let temp = numArray[i];
          numArray[i] = numArray[i + 1];
          numArray[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return numArray;
  }
  
  console.log(bubbleSort([12, 4, 14, 27, 35, 48, 6, 9, 1, 13]));