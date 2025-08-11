
let namelist =["rakan","saad","reco","z"];
    password= 123;
function getvalue(){
    nameanser=document.getElementById("username").value;
    passwordanser=document.getElementById("userpassword").value;
    if (namelist.includes(nameanser) && passwordanser == password){
        document.getElementById("massage").innerHTML = "hello " + nameanser.toUpperCase() ;
        window.location.href="page1.html";
    }
    else if (nameanser != "rakan" && passwordanser == password){
        document.getElementById("massage").innerHTML = "wrong " + nameanser ;
    }
    else if (nameanser == "rakan" && passwordanser != password){
        document.getElementById("massage").innerHTML = "wrong passeword"  ;
    }
    else if (nameanser.length() >= 6 || passwordanser >= 6){
        document.getElementById("massage").innerHTML = "long anser!"  ;
    }
    else if (isNaN(password)){
        document.getElementById("massage").innerHTML = "you must enter a number to password!";
    }
    else{
        document.getElementById("massage").innerHTML = "ERROR " ;
    }
    console.log(anser)
}
function reset(){
    location.reload()
}

function getBack(){
    window.location.href="test.html";
}


                



                    
        