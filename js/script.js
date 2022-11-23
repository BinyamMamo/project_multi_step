
function next(index){
    var before = document.getElementById("before");
    var container = document.getElementById("btn-container");
    var cont_one = document.getElementById("container-one");
    // var cont_two = document.getElementById("container-two");

    if(index == 1){
        container.style.setProperty("--locus", "8rem");
        before.style.borderTopLeftRadius = "0rem";
        before.style.borderTopRightRadius = "0rem";
        cont_one.style.marginLeft = "-25rem";
        cont_one.style.transition = "0.75s";
    }

    if(index == 2){
        container.style.setProperty("--locus", "16rem");
        before.style.borderTopLeftRadius = "0rem";
        before.style.borderTopRightRadius = "0.4rem";
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
        container.style.setProperty("--locus", "0rem");
        before.style.borderTopLeftRadius = "0.4rem";
        before.style.borderTopRightRadius = "0rem";
        cont_one.style.marginLeft = "0rem";
        cont_one.style.transition = "0.75s";   
    }

    if(index == 2){
        container.style.setProperty("--locus", "8rem");
        before.style.borderTopLeftRadius = "0rem";
        before.style.borderTopRightRadius = "0rem";
        cont_one.style.marginLeft = "-25rem";
        cont_one.style.transition = "0.75s";   
    }
}