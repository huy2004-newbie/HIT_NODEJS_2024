function checkNull(obj){
    if(Object.keys(obj).length === 0){
        return true;
    }
    return false;
}

const cat = {
    name: "meow",
    age: 2
};
const dog = {};
console.log(checkNull(cat))
console.log(checkNull(dog))


