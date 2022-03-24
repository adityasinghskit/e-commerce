document.querySelector("form").addEventListener("submit",signupFunc);

let signdata=JSON.parse(localStorage.getItem("signkey")) || [];
function signupFunc() {
    event.preventDefault();
    let email1=document.querySelector("#email").value;
    let pass1=document.querySelector("#pass").value;
    let phone1=document.querySelector("#phone").value;
    let obj={
        email:email1,
        pass:pass1,
        phone:phone1

    }
    signdata.push(obj);
    localStorage.setItem("signkey",JSON.stringify(signdata));
}