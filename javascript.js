function changeLabels(box, text){

    var value = document.getElementById(text).value; 

    if (value === "") {
        document.getElementById(box).textContent = "Please enter something...";
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