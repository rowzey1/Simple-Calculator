
function divideBy(){
    num1=document.getElementById("numone").value;
    num2=document.getElementById("numtwo").value;
    document.getElementById("result").innerHTML= num1/num2;
}

function multiplyBy(){
    num1=document.getElementById("numone").value;
    num2=document.getElementById("numtwo").value;
    document.getElementById("result").innerHTML= num1*num2;
}

function subtractBy(){
    num1=document.getElementById("numone").value;
    num2=document.getElementById("numtwo").value;
    document.getElementById("result").innerHTML= num1-num2;
}


function addBy(){
    num1=document.getElementById("numone").value;
    num2=document.getElementById("numtwo").value;
    document.getElementById("result").innerHTML= (+num1)+(+num2)
}
