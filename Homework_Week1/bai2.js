const numbers = [2, -7, 9, 5, 2, 0, 5];

function findMax(Arr){
    let size = Arr.length;
    let max = -Infinity;
    let maxSecond = max;
    while(size--){
        if(Arr[size] > max){
            maxSecond = max;
            max = Arr[size]; //index
        }
    }
    console.log(maxSecond);
}

findMax(numbers);