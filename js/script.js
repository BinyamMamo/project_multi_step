
function next(index){
    var before = document.getElementById("before");
    var container = document.getElementById("btn-container");
    var cont_one = document.getElementById("container-one");
    // var cont_two = document.getElementById("container-two");

    if(index == 1){
        // container.style.setProperty("--locus", "7.5rem");
        before.style.width = "17rem";
        before.style.clipPath = "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)";
        cont_one.style.marginLeft = "-25rem";
        cont_one.style.transition = "0.75s";
    }

    if(index == 2){
        before.style.width = "24rem";
        before.style.borderTopRightRadius = "0.4rem";
        before.style.clipPath = "none";
        cont_one.style.marginLeft = "-50rem";
        cont_one.style.transition = "0.75s";
    }
    
}

function back(index){
    var before = document.getElementById("before");
    var container = document.getElementById("btn-container");
    var cont_one = document.getElementById("container-one");
    // var cont_two = document.getElementById("container-two");

    if(index == 1){
        before.style.width = "9rem";
        before.style.borderTopRightRadius = "0rem";
        before.style.clipPath = "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)";
        cont_one.style.marginLeft = "0rem";
        cont_one.style.transition = "0.75s";   
    }

    if(index == 2){
        before.style.width = "17rem";
        before.style.clipPath = "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)";
        cont_one.style.marginLeft = "-25rem";
        cont_one.style.transition = "0.75s";   
    }
}