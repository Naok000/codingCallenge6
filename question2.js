let calcArr = [1,3,2,6,8,13,9,16,4];

let target = 17;

let pareAns = [],
    result  = [];

const answer = (arr,target) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                pareAns.push(arr[i],arr[j]);
                result.push(pareAns);
                pareAns = [];
            }
        }
    }
    
    return result;
}

console.log(answer(calcArr,target));