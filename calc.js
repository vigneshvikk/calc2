function displayNum(num){
result.value+=num
}
function evaluateExp(){
    expr=result.value
    op=eval(expr)

    result.value=eval(result.value)
}
function emptyClear(){
    result.value=""
}
function backSpace(){
result.value=result.value.slice(0,-1)
}