const repeatString = function(string, num) {

    let stringContainer = "";

    for (let i = 0; i < num; i++) {
        stringContainer += string;
    }

    return stringContainer;
};

// Do not edit below this line
module.exports = repeatString;
