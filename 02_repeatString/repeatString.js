const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let heys = "";
    for (i = 1; i <= num;  i++) {
        heys += string;
    }
    return heys;
};

// Do not edit below this line
module.exports = repeatString;
