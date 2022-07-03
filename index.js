function hasTargetSum(array, target) {
  const arrayNumbers = {};
  for (const number of array) {
    const comp = target - number;
    if (arrayNumbers[comp]) return true;
    arrayNumbers[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  create an function that will take in two arguments; array & integer
  create an object to track numbers we have seen (also to prevent double iterations)
  iterate through each number of the array
    for the current numb, identify a complement that adds to the target (comp = target - num)
    check if any keys on our object is the complement
      if so, return true
      if not, add num to the object

  after we reach the end with no complement, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
