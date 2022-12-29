/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

// function sort(nums, arr = []) {
    // Your code here

    // if(nums.length === 0){ // getting nums down to 0
    //     return arr;
    // }
    // let min = Math.min(...nums)
    // let index = nums.indexOf(min)
    // arr.push(nums[index])
    // nums.splice(index, 1)
    
    // return sort(nums, arr) 

// if (nums.length === 0) return [];
//   let max = Math.max(...nums);
//   let index = nums.indexOf(max);

//   nums.splice(index, 1);
//   return [...sort(nums), max];
// }

function sort(arr) {
    // base case: if the input array has 0 or 1 element, return the array
    if (arr.length <= 1) {
      return arr;
    }
  
    // recursive case:
    // 1. find the minimum value in the array
    // 2. remove the minimum value from the array
    // 3. sort the rest of the array using the sortArray function
    // 4. add the minimum value to the sorted array
    // 5. return the sorted array
    let min = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        index = i;
      }
    }
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const sortedRest = sort(rest);
    return [min, ...sortedRest];
  }


console.log(sort([])) // prints []
console.log(sort([9])) // prints [9]
console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}