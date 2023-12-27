// script.js
document.getElementById("applyButton").addEventListener("click", applyCase);

function applyCase() {
    let inputText = document.getElementById("inputText").value;
    let caseType;

    let radios = document.getElementsByName("caseType");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            caseType = radios[i].value;
            break;
        }
    }

    if (caseType === "upper") {
        document.getElementById("output").innerText = inputText.toUpperCase();
    } else if (caseType === "lower") {
        document.getElementById("output").innerText = inputText.toLowerCase();
    }
}
