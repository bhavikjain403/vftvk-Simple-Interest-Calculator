function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*rate*years/100;
    var year = new Date().getFullYear()+parseInt(years);
    var total = parseFloat(principal)+parseFloat(interest);
    if(principal <= 0)
    {
        alert("Enter a positive number");
        principal.focus();
        return false;
    }
    document.getElementById("result").innerHTML='&emsp;&emsp;&emsp;If you deposit <span id="highlight">'+principal+'</span>,<br>&emsp;&emsp;&emsp;at an interest rate of <span id="highlight">'+rate+'%</span>.<br>&emsp;&emsp;&emsp;You will receive an amount of <span id="highlight">'+total+'</span>,<br>&emsp;&emsp;&emsp;in the year <span id="highlight">'+year+'<span>';
    return true;
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}