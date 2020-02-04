function checkc()
{
   
    var eng=parseInt(document.getElementById("e").value);
    var gk=parseInt(document.getElementById("g").value);
    var mt=parseInt(document.getElementById("m").value);
    var total,per,max;
    total=eng+gk+mt;
    if(!isNaN(total))
    {
        per=(eng+gk+mt)/3;
        max=gk;
        if(eng>gk)
        {
            max=eng;
        }
        if(mt>eng)
        {
            max=mt;
        }
        document.forms['form1']['tm'].value = total;
        document.forms['form1']['pers'].value = per;
        document.forms['form1']['high'].value = max;
    }
    else
    {
        alert("Enter valid numbers");
        
    }

}