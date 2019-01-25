window.onload=function()
{
	document.getElementById("result").style.display="none";
};

var url="http://numbersapi.com/";
	
var response;
var res;
async function numcall() //async is used so that baaki ka code run ho sake, not stopping at await
{
	var getnum = document.getElementById('searchBox').value;
	
	if ( res == "" || res == null) {
        setTextNode(
            document.getElementsByClassName("errorMsg")[0],
            "Please enter any number."
        );
	
	var jso="?json";
	response= await fetch(url+getnum+jso);
	res= await response.json();
	console.log(res.text);
	document.getElementById("def").innerHTML=res.text;
	document.getElementById("result").style.display="block";
}

numcall();