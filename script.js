// script.js
document.getElementById("applyButton").addEventListener("click", applyCase);

function applyCase() {
    var inputText = document.getElementById("inputText").value;
    var caseType;

    // Determine the selected case type
    var radios = document.getElementsByName("caseType");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            caseType = radios[i].value;
            break;
        }
    }

    // Apply the selected case transformation and display the output
    if (caseType === "upper") {
        document.getElementById("output").innerText = inputText.toUpperCase();
    } else if (caseType === "lower") {
        document.getElementById("output").innerText = inputText.toLowerCase();
    }
}
