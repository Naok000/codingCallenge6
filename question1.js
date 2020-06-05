// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
//make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 

let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

let sortArr = arr.sort((a,b) => a-b);

let evacuation = [],
    cleanRoom  = [];

sortArr.forEach((number,index) => {
    if(number === sortArr[index + 1]){
        evacuation.push(number);
    } else if(number === sortArr[index - 1]){
        evacuation.push(number);
        cleanRoom.push(evacuation);
        evacuation = [];
    } else {
        cleanRoom.push(number);
    }
});

console.log(cleanRoom);

// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let bonusArr = [1, "2", 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, "1", "20", "20"];

function typeNumOrStr (arr){
    let result = [];
    let numberArr = arr.sort((a,b) => a-b).filter(num => typeof(num) === "number");
    let stringArr = arr.sort((a,b) => a-b).filter(num => typeof(num) === "string");

    result.push(numberArr,stringArr);

    return result;
}

console.log(typeNumOrStr(bonusArr));

