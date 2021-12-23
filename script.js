
/*
let user  = 'john'
function getArray(length){
     //    length =   length || 5
    var array =[];
    for(i=0; i<=length; i++){
        array.push(i);

    }
console.log(array)
 
}
getArray(3,4,4);
console.log(arguments);
*/


//// 1
function calc(a,b,c){

    result = (a-b)/c;
    return result;
}
console.log(calc(5,1,2))


///////2

function sqrCubeNumber(d){

    sqr = Math.pow(d,2);
    cube = Math.pow(d,3);
return d+" square  = " +sqr+  ' // ' +d+ " cube = " + cube

}
console.log(sqrCubeNumber(12))


/////3

flag= true
function minMaxNUmber(number1, number2){

    if (number1 > number2){
        return number1 +" > " + number2
    }else if(number1 < number2){
        return number1 +" < " + number2
    }else{
            return "numbers are equal"
    }
}
console.log(minMaxNUmber(-1,1))


//////4


let input1 = 1// prompt()
    input2 =  5// prompt()
    array = []
function arrayInput(input1, input2){

    for (i = input1; i<=input2; i++){
        array.push(i)
    }
return array  
}
function arrayDisplay(array){
    console.log(array)
}
arrayDisplay(arrayInput(input1, input2))
/////5


function isEven(number){

    if(number % 2 === 0){
        return (true)
    }else{
        return (false)
    }
  
}
console.log(isEven(4))

///////6

    array1 = [1,7,8,2,6,8,10,1];
    array2 = []
function arrNumbers(array1){

 for(i=0; i<=array1.length-1; i++){
     if (isEven(array1[i])){
        array2.push(array1[i]) 
     }
 }  
 return array2
}
console.log(arrNumbers(array1))

////////7
let rows = prompt(""),
string = '' ;
function myTriangle(rows){
for(i=0; i<rows; i++){
    string = ""
   for(j=1; j<i; j++){
       string += i  
}  
    console.log(string)
}
}
myTriangle(rows)

