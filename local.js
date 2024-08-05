var id = document.querySelector("#user");
var pass = document.querySelector("#pass");
var submit = document.querySelector("#sub");
var popUp = document.querySelector(".popup");
var message = document.querySelector("#popmes");

submit.addEventListener("click", submitData)

function submitData(){
    if(id.value == "" || pass.value == ""){
        alert("Please Fill all Fields");
    }
    else{
        var userName = id.value;
        var passName = pass.value;
        
        localStorage.setItem("id : " + userName, "Password : " + passName);

        popUp.style.display = "flex";
        message.addEventListener("click", function(){
            popUp.style.display = "none";
        })

        id.value = "";
        pass.value = "";
        
    }
}