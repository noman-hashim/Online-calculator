function getnumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function resultsqrt(){
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);
}
function clearresult(){
    var result = document.getElementById("result");
    result.value = ""
}
function getresult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}

function sin(){
    var result = document.getElementById("result");
    result.value = Math.sin(result.value);
}