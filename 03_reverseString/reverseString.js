const reverseString = function(string) {
    // Step One: Use the split() method to return a new array
    let splitString = string.split("");

    // Step Two: Use reverse() method to reverse the new array
    let reverseArray = splitString.reverse();

    // Step Three: Use the join() mthod to join all elements of the array into a string
    let joinArray = reverseArray.join("");

    //Step Four: Return the reversed String
    return joinArray;

};

// Do not edit below this line
module.exports = reverseString;
