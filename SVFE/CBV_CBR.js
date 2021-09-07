const a = 100;
const objA = {value : 100};

function changeArg(a, obgA){
    a = 200;
    obgA.value = 200;

    console.log(num);
    console.log(objA.value);
}

changeArg(a, obgA);

console.log(a);
console.log(objA.value);

//기본타입의 경우 CBV, 객체타입의 경우 CBR이다.