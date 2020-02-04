function check()
{
    var c=0;
    if(document.getElementById("r1").checked)
    {
        c=c+2;
    }
    if(document.getElementById("r2").checked)
    {
        c=c+2;
    }
    alert("You got "+c+" marks");
}
