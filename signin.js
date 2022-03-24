document.querySelector("form").addEventListener("submit",signinFunc);

function signinFunc() {
    event.preventDefault();
    let email1=document.querySelector("#email").value;
    let pass1=document.querySelector("#pass").value;
    let logged=false;
    let signupdata=JSON.parse(localStorage.getItem("signkey")) || [];
    for(let i=0;i<signupdata.length;i++) {
        if(signupdata[i].email==email1 && signupdata[i].pass==pass1) {
            alert("You are logged in.");
            window.location.href="men.html";
            logged=true;
            break;
        }
    }
    if(!logged) {
        alert("Incorrect Password/Username");
    }
}