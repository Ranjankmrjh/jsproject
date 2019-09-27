
function buttonClickHandler()
{
    
    
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && status==200){
            document.getElementById("demo").innerHTML=this.responseText;
        }
    };
    xhttp.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
    xhttp.send();
}
