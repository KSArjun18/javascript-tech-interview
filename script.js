// function capital(str){
//     return str.charAt(0).toUpperCase() +str.slice(1)
// }
// console.log(capital("hello"))

// function toUpperCase(str) {
//     return str.toUpperCase();
// }

// console.log(toUpperCase("Hello, world!")); // Output: "HELLO, WORLD!"


// function capitalizeString(str) {
//     let words = str.split(' ');
//     let capitalizedWords = words.map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(' ');
// }

// console.log(capitalizeString("hello world!")); // Output: "Hello World!"

// function filterEvenNumbers(numbers) { 
//     return numbers.filter(num => num % 2 === 0); 
//   } 
//   console.log(filterEvenNumbers([1,2,3,4,5,6]))

// function sortArray(arr1,arr2){
//     return [...arr1,...arr2].sort((a,b)=>a-b)
// }
// console.log(sortArray([10,20,30],[20,40,50]))

function sortArray(arr1,arr2){
    return[...arr1,...arr2].sort((a,b)=>a-b)
}

// function findMaxArray(arr){
// let min=Math.min(...arr)
// let max=Math.max(...arr)
// return([min,max])
// }
// console.log(findMaxArray([10,20,40]))



function foo(str){
for(let i=0;i<str.length -1;i++){
    if(str[i] >str[i+1]){
        return false
    }
}
return true
}
console.log(foo([15, 3, 4, 5]))
