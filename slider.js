let time = 5000,
    currentInputIndex = 0,
    inputs = document.querySelectorAll('.slider > li > input'),
    maxOfInputs = inputs.length;

function click(id) {

    let input = inputs[id];
    inputs[currentInputIndex].checked = false;
    input.checked = true;
}

function start() {
    setInterval(function() {
        let id = (currentInputIndex + 1) % maxOfInputs;

        click(id)
        currentInputIndex = id;

    }, time);
}

window.addEventListener("load", start)