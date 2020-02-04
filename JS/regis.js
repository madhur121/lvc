function showPrompt()
{
    prompt("Please enter your name to continue");
}

function cB() 
{
     var c=0;
    var ck=document.forms["form1"]["productinfo"];
    for(i in ck)
    {
    if (ck[i].checked==true)
    {
        c++;
    }  
}
if(c<3)
alert("Please select at least 3 elemnt, so far selected "+c);
else
alert("Succesfully selected.")
}
function ser()
{
    var e = document.getElementById("s");
var strUser = e.options[e.selectedIndex].value;
var box=document.getElementById('the_search');
if(strUser=="g")
window.location='http://www.google.com/search?q='+escape(box.value);
else if(strUser=="d")
window.location='http://www.duckduckgo.com/search?q='+escape(box.value);
else if(strUser=="b")
window.location='http://www.bing.com/search?q='+escape(box.value);
}

