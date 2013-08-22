var day = new Date();
var isitSept="No";
if (moment(day).format("MM")==9)
{
isitsept="Yes";
}

var idiot = document.getElementById("idiot");
idiot.innerHTML=isitSept;
