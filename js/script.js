function register(regBtn){
    var login = document.getElementById("container-one");
    var register = document.getElementById("container-two");
    login.style.marginLeft = "-25rem";
    login.style.transition = "1s";

    register.style.marginLeft = "5rem";
    register.style.transition = "0.75s";

    regBtn.classList.add("btn-active");
    regBtn.previousElementSibling.classList.add("btn-inactive");
    regBtn.classList.remove("btn-inactive");
    regBtn.previousElementSibling.classList.remove("btn-active");
}

function login(logBtn){
    var login = document.getElementById("container-one");
    var register = document.getElementById("container-two");
    login.style.marginLeft = "0rem";
    login.style.transition = "1s";

    register.style.marginLeft = "25rem";
    register.style.transition = "0.75s";

    logBtn.classList.add("btn-active");
    logBtn.nextElementSibling.classList.add("btn-inactive");
    logBtn.classList.remove("btn-inactive");
    logBtn.nextElementSibling.classList.remove("btn-active");
}