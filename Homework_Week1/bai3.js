const hit14 = ["H", "I", "T", 1, 4];
const result = {};

for(var i = 0; i < hit14.length; i++){
    result["key" + (i+1)] = hit14[i];
}

console.log(result);

