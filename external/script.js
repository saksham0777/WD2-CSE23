function check(){
    let n=document.getElementById("num").value;
    if(n%2==0)
        document.getElementById("result").innerText="Even Number";
    else
        document.getElementById("result").innerText="Odd Number";
}