// function array(string) {
//     const arr = string.split(',');
//     arr.shift(1);
//     arr.pop(1);
//     return arr;
// }
// console.log(array('')); //null
// console.log(array('1,2')); //null
// console.log(array('1,2,4')); //2
// console.log(array('a,c,b,w,r')); //c,b,w


function array(string) {
    let result = string.split(',').slice(1, -1)
    return result
    return result.length ? result : null
}
console.log(array('')); //null
console.log(array('1,2')); //null
console.log(array('1,2,4')); //2
console.log(array('a,c,b,w,r')); //c,b,w


// function array(string) {
//     return string.slice(1, -1)
// }
// console.log(array('')) //null
// console.log(array('1,2')) //null
// console.log(array('1,2,4')) //2
// console.log(array('a,c,b,w,r')) //c,b,w









// function array(string) {
//     let result = string.split(',')
//     for (let i = 1; i < array.length; i++) {
//         if (result.length > 2) {
//             let sliceresult = result.slice(1, -1)
//             return sliceresult
//         } else {
//             return 'null'
//         }

//     }
// }

// console.log(arr(""));
// console.log(arr("2, 4"));
// console.log(arr("a,d,f,s,g,h,"));
// console.log(arr("a,c,b,w,r"));