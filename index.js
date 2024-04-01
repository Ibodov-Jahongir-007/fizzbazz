// function fizzbazz (arr) {
//     let arry = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//     let fizz = []
//         let bazz = []
//         let fizzbazz = []
//     for(num of arry) {
//         if(num % 3 === 0 && num % 5 === 0 ) {
//            fizzbazz.push(num)
//         } else if(num % 5 && num === 0) {
//             bazz.push(num)
//         } else if(num % 3 && num === 0) {
//             fizz.push(num)
//         } 
//     }
//     return fizz
// }
// console.log(
//     fizzbazz());

    function sort(array){
        let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        
        let fizzbuzz = []
        for(num of arr){
            
            if(num % 3 === 0 && num % 5 === 0){
                fizzbuzz.push('fizzbuzz')
                    
            }        else if(num % 5 === 0){
                fizzbuzz.push('Buzz')
    
            } else if(num % 3 === 0){
                fizzbuzz.push('Fizz')
    
            } else {
                fizzbuzz.push(num)
            }
            
        }
    
    
        return fizzbuzz
        
    }
    console.log(sort())




