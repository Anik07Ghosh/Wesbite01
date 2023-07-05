function myfunction(){
    var x =document.getElementById("password");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){
    var password = document.getElementById("password");
    var length = document.getElementById("length");

    if(password.value.length >=8){
        alert("Login Succesfull");
        window.location.replace("index2.html");
       
        return false;
    }
    else{
        alert("Login Failed");
    }
}
/*function validate(username,password){
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").value;
    if(username=="anik"&&password=="guu"){
        alert("login done");
        return false;
    }
    else{
        alert("login failed");
    }
}*/


