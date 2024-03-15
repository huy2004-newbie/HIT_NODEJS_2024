const club = {
    name: "HIT HaUI",
    age: 14,
    country: "VI"
}

const keysToCheck = ["name", "age", "country"];
var check = true;

for(var i = 0 ; i < keysToCheck.length; i++){
    if(club[keysToCheck[i]] === undefined){
        check = false;
        break;
    }
}
console.log(check)