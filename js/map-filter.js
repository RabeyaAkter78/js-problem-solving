
// map
const arr =[1,2,3,4,5,677];
const result =arr.map(v=>v*v);
console.log(result);

// filter:
const n=[1,2,3,44,56,900];
const res =n.filter(v=>v%2==0 );
// console.log(res);


// 
// const findLargestEl=(arr)=>{
//     let max =arr[0].length;
//     arr.map(e=>max = Math.max(max,e.length));
//     let result= arr.filter(e=>e.length==max);
//     return result;
//     console.log(result); 
// }
// const array =['pia','ria','soma',];
// console.log(findLargestEl(array));
const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);


