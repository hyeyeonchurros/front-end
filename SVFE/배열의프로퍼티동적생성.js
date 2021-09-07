//배열의 프로퍼티 동적 생성
const arr = ['zero', 'one', 'two'];

arr.color = 'blue';
arr.name = 'number_array';
console.log(arr);
console.log(arr.length);

arr[3] = 'red';
console.log(arr.length);

console.log(arr);