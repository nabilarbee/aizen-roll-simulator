

document.getElementById("rollButton").onclick = function(){
    let x = 0;
    let counter = 0;
    while (x != 1) {
        document.getElementById("loadlabel").innerHTML = "rolling...";
        x = Math.floor(Math.random() * 80000) + 1;
        console.log(x);
        counter += 1;
    }
    
    let y = 0;
    
    y = Math.floor(Math.random() * 100) + 1;
    
    
    
    if (y == 1){
        document.getElementById("xlabel").innerHTML = "You pulled a Shiny Aizen!";
    } else {
        document.getElementById("xlabel").innerHTML = "You pulled Aizen!";
    }

    
    document.getElementById("ylabel").innerHTML = counter + " pulls";
    document.getElementById("zlabel").innerHTML = counter * 150 + " stars used!";
    document.getElementById("alabel").innerHTML = counter * 150 / 3.75 + " robux spent!";
    document.getElementById("loadlabel").innerHTML = " ";

    console.log(counter + " pulls");
    console.log(counter * 150 + " stars used!");
    console.log(counter * 150 / 3.75 + " robux spent!");
}


