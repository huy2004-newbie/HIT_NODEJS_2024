const numbers = [1, 3, 8, 3, 6, 2, 0, -9, 8];
// numbers.sort(function(a,b){return b - a})
numbers.sort().reverse();

for(var i = 0; i < numbers.length - 1; i++) {
    if(numbers[i] === numbers[i+1]){
        for(var j = i+1; j < numbers.length; j++){
            numbers[j] = numbers[j+1];
        }
        numbers.pop();
        i--;
    }
}

console.log(numbers);