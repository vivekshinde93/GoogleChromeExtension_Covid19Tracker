function loadData(){
    var country = document.getElementById("country").value;
    var xhttp =new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        /* 0:request not intalized
        1:server connection established
        2:request estblished
        3:processing request
        4:request finished and response is ready*/
        if(xhttp.readyState===4 && this.status===200){
            var responseData = xhttp.responseText;
            var jsonData =JSON.parse(responseData);
            var code = jsonData[0].callingCodes;
            document.getElementById("code").innerHTML = code; 
        }
    }
    xhttp.open("GET","https://restcountries.eu/rest/v2/name/"+country+"?fullText=true",true);
    xhttp.send();
}
loadData();