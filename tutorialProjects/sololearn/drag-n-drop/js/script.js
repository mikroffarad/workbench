function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id)
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data))
}
