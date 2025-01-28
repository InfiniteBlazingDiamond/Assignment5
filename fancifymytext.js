
function bigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function fancify() {
    var checked = document.getElementById("fancy").checked;
    if(checked) {
        document.getElementById("textInput").style.fontWeight = "bold";
        document.getElementById("textInput").style.textDecoration = "underline";
        document.getElementById("textInput").style.color = "blue";
    }
}

function boring() {
    var checked = document.getElementById("boring").checked;
    if(checked) {
        document.getElementById("textInput").style.fontWeight = "normal";
        document.getElementById("textInput").style.textDecoration = "none";
        document.getElementById("textInput").style.color = "black";
    }
}

function moo() {
    var text = document.getElementById("textInput").value;
    var uppercase = text.toUpperCase();
    var textArray = uppercase.split(".");
    uppercase = textArray.join("-Moo.");
    document.getElementById("textInput").value = uppercase;

}