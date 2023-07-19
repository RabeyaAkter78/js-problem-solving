function getSum(a, b = 9) { return a + b; }
// console.log(getSum(2, 7));
// const y = x => x * x; const z = y(5);
// console.log(z);
// const division= num1, num2 => console.log(num1 /num2);
// division(4,2);

// // problem:1
// const multiply=(a,b,c)=>a*b*c;

// const result = multiply(2,3,4);
// console.log(result);

// problem:1:

const sentence = `
I am a web Developer.
i love to code.
i love to eat beriani.
`
// console.log(sentence);


// problem:1:

variable = (a, b = 10) => {
    return add = (a + b);
}
variable(4);
// console.log(add);
// problem:2


// const friends = ['pia', 'ria', 'soma', 'rima', 'tania'];
// const res = friends.filter(v => v.length % 2 == 0);
// console.log(res);
// return res;

// problem:3:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = arr.map(v => v * v);

// for(let i=0; i<=arr.length;i++){
//     let array=arr[i];
//     console.log(array);
// }

// console.log(result );

// problem:4:

let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];
let Numbers3 = [...numbers1, ...numbers2];
let numbers = Math.max(...Numbers3)
// console.log(numbers);

// Quize:
const obj = { foo: 1 };
obj.bar = 2;
// console.log(obj);

function min(nums) {
    return Math.min(nums)
}
//   console.log(min( [1,3,2 ]))
const cube = x => x * x * x;
//   console.log(cube(2))
const [a, b] = [1, 2, 3, 4, 45, 5];
// console.log(a+b)
const { x, y, z } = { x: 1, y1: 2, z: 3 };
// console.log(y);

const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
// console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
friends.find(friend => friend.length == 5);
// console.log(friends);


const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);