// Find elements on the page
const addNoteForm = document.querySelector("#addNoteForm");
const noteTitleInput = document.querySelector("#noteTitleInput");
const noteTextInput = document.querySelector("#noteTextInput");
const cardWrapper = document.querySelector("#cardWrapper")

let notesArray = []

// Handling localStorage
if (localStorage.getItem("notesArray")) {
    notesArray = JSON.parse(localStorage.getItem("notesArray"))
}

// Array with notes
// const notesArray = [
//     {
//         id: 1,
//         title: 'JS Basics',
//         text: 'Lorem ipsum dolor sit amet...'
//     },
//     {
//         id: 2,
//         title: 'DOM Tree',
//         text: 'Lorem ipsum dolor sit amet...'
//     },
//     {
//         id: 3,
//         title: 'JS Events',
//         text: 'Lorem ipsum dolor sit amet...'
//     },
// ]

// Listen submit of form
addNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();


    let id = 1;

    if (notesArray.length > 0) {
        id = notesArray[notesArray.length - 1]["id"] + 1;
    }

    // Add text of note into array
    notesArray.push({
        id: id,
        title: noteTitleInput.value,
        text: noteTextInput.innerHTML
    })

    localStorage.setItem("notesArray", JSON.stringify(notesArray));

    // Clear input value by clearing the entire form
    addNoteForm.reset();
    noteTitleInput.innerHTML = "";
    noteTextInput.innerHTML = "";
    formTextFake.removeAttribute("hidden");
    noteTitleInput.focus();

    const lastNote = notesArray[notesArray.length - 1];
    const html = `
    <section class="card">
        <div class="card-body">
            <h5 class="card-title">${lastNote.title}</h5>
            <p class="card-text">${lastNote.text}</p>
            <button data-action="delete" data-id="${lastNote.id}" class="btn btn-dark btn-sm">Remove</button>
        </div>
    </section>
    `
    cardWrapper.insertAdjacentHTML("afterbegin", html)
})

// Display notes based on array
notesArray.forEach((note) => {

    const html = `
    <section class="card">
        <div class="card-body">
            <h5 class="card-title">${note.title}</h5>
            <p class="card-text">${note.text}</p>
            <button data-action="delete" data-id="${note.id}" class="btn btn-dark btn-sm">Remove</button>
        </div>
    </section>
    `

    cardWrapper.insertAdjacentHTML("afterbegin", html)
})

// Deleting a note
document.addEventListener("click", (event) => {

    if (event.target.dataset.action == "delete") {
        const id = event.target.dataset.id;
        const index = notesArray.findIndex((note) => {
            return note.id == id
        })
        notesArray.splice(index, 1)
        localStorage.setItem("notesArray", JSON.stringify(notesArray));
        event.target.closest(".card").remove();
    }

})
