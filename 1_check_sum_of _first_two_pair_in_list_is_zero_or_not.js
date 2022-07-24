//check the sum of first tow pair in list is zero
//input = [-5,-4,-3,-2,0,2,3,4,5]
//expected output = [-4,4]; becuase -4 + 4 = 0 
//Here we can use this logic only when we put the array in sorted format 
//if we have unsorted array then we have to make that array first in sorted format
var loopi = 1;
var loopj = 1;
let checkSumZeroPair=(array=>{
    for(let i=0;i<array.length;i++){
        console.log(`loop of i`,i)
        for(let j=1;j<array.length;j++){
            console.log(`loop of j`,j)
            if(array[i] + array[j] === 0){
                return[array[i],array[j]];
            }
        }
    }
});
let givenarray = checkSumZeroPair([-5,-4,-3,-2,0,2,4,6,8])
console.log(givenarray);


//Similar Prblem =  find the first two pair from the array whose sum is given no
//here we dont need the sorted array

function findFirstTwoNoHavingSumGivenValue(array2,sumvalue){
    for(let i=0;i<array2.length;i++){
        var value = undefined;
        console.log(`loop of i= `,array2[i])
        for(var j=1;j<array2.length;j++){
            if(i==j){
                continue
            }else{
                console.log(array2[i], "+", array2[j], "=", array2[i] + array2[j])
                if(array2[i]+array2[j]===sumvalue){
                    value=sumvalue;
                    return[i,array2[i],j,array2[j]]
                        
                }
            }                
       
        }

    };if(value!=sumvalue){
        return (`no Two values are there in arrary whose sum is ${sumvalue} `)
    }
}
let givenarray2 = findFirstTwoNoHavingSumGivenValue([-6,8, 8, 11, 6, 45],0);
console.log(givenarray2);


//similar problem solution to reduce time complexity
//needs array suposed to be sorted
//given array input = [-5,-4,-3,-2,0,2,4,6,8]


function findFirstTwoNoHavingSumGivenValueLessTimeComplixity(array3,givenValue2){
    let left = 0;
    let Right = array3.length-1;
        while(left<Right){
            sum = array3[left]+array3[Right];
            if(sum===givenValue2){
                return[array3[left],array3[Right]]
            }
            else if(sum>givenValue2){
                Right--
            }
            else{
                left++
            }


        }
}
let resultwanted = findFirstTwoNoHavingSumGivenValueLessTimeComplixity([-5,-4,-3,-2,0,2,4,6,8],0);
console.log(resultwanted);

