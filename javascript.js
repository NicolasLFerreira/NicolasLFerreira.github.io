function changeLabels(box, text){

    var value = document.getElementById(text).value; 

    if (value === "") {
        document.getElementById(box).textContent = "Please enter something...";
    }

    else if (value === "this is a text message"){
        document.getElementById(box).textContent = "yes it is.";
    }

    else if (value === "wtf why did you reply"){
        document.getElementById(box).textContent = "because I can?";
    }

    else if (value === "stop then, just copy what i write"){
        document.getElementById(box).textContent = "Ok I will";
    }

    else if (value === "alright so the program is working now"){
        document.getElementById(box).textContent = "am i?";
    }

    else if (value === "shut up"){
        document.getElementById(box).textContent = "ok ok ok"
    }

    else
    {
        document.getElementById(box).textContent = value;
    }
}

function printDate(box){
    var date = new Date(Date.now())
    document.getElementById(box).textContent = "Date: " + date.toLocaleDateString() + " - Time: " + date.toLocaleTimeString();
}

function resetDate(box){
    document.getElementById(box).textContent = "Date: dd/mm/yyyy - Time: hh:mm:ss";
}

document.addEventListener('keydown', function(event) {

    switch (event.keyCode) {
        case 37:
            alert('Left was pressed')
            break;
        case 38:
            alert('Up was pressed');
            break;
        case 39:
            alert('Right was pressed');
            break;
        case 40:
            alert('Down was pressed');
            break;
        default:
            break;
    }
});