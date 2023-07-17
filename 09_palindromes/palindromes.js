const palindromes = function (string) {
    let processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    // [A-Za-z] is a regular expression that will match anything between A-Z and a-z.
    // ^ before indacates anything that is NOT an alphabet, should be replaced with "". An empty string.

    let reverseString = (
        processedString.split("").reverse().join("")
        // split the string into an array.
        // reverse the content of the array.
        // join the array back into a string.
    );
    return processedString == reverseString;
    // if processedString is the same as the reverseString then the string is a palindrome.
};

// Do not edit below this line
module.exports = palindromes;
