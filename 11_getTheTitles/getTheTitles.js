const getTheTitles = function(arr) {
    let titleArray = [];
    arr.forEach(element => {
        titleArray.push(Object.values(element)[0]);
    })
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
