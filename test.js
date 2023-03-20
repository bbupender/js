

var btn= document.getElementById("txtbtn");
//document.getElementById("txtbtn").addEventListener("click", myFunction);

// function myFunction(){
//     var name= document.getElementById("txtbx").value;
//     alert("TextBox value is: "+ name);
// }
window.onload=function(){
    var btn= document.getElementById("txtbtn");
    // document.getElementById("txtbtn").addEventListener("mouseleave", myFunction);
    document.getElementById("txtbx").addEventListener("blur", myFunction);
    
    function myFunction(){
        var name= document.getElementById("txtbx").value;
        alert("TextBox value is: o"+ name);
    }
}

var obj={
    "first Name":"ramana",
    LastName:"hello"
}
console.log(obj.firstName);
console.log(obj["first Name"]);

var con=new Function("","","")

class cls1{
    cls1(){
       var name;
       var mob; 
       function getData(){

       }
    };
    
}

var ob=new cls1();
ob.name="ramana"

/*
onclick
onke yup
onkeydown
onkeypress
onblur
onchange
mouseover
mouseleave


addEvent

*/