//declaring the function 
function displayNumber(num){
if(num%2===0){
    console.log("candy")
}
if(num%11===0){
console.log("bar")
}
if(num%22===0){
console.log("candybar")
}
if(num%22!==0 && num%2!==0 && num%11!==0){
    console.log(num)
}


}

displayNumber(7)