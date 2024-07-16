// Find elements on the page
const addNoteForm = document.querySelector("#addNoteForm");
const noteTitleInput = document.querySelector("#noteTitleInput");
const noteTextInput = document.querySelector("#noteTextInput");
const cardWrapper = document.querySelector("#cardWrapper")

// Array with notes
const notesArray = [
    {
        title: 'JS Basics',
        text: 'Lorem ipsum dolor sit amet...'
    },
    {
        title: 'DOM Tree',
        text: 'Lorem ipsum dolor sit amet...'
    },
    {
        title: 'JS Events',
        text: 'Lorem ipsum dolor sit amet...'
    },
]

// Listen submit of form
addNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Add text of note into array
    notesArray.push({
        title: noteTitleInput.value,
        text: noteTextInput.textContent
    })

    // Clear input value by clearing the entire form
    addNoteForm.reset();

    noteTitleInput.textContent = "";
    noteTextInput.textContent = "";
    formTextFake.removeAttribute("hidden");
    noteTitleInput.focus();

    const lastNote = notesArray[notesArray.length - 1];
    const html = `
    <section class="card">
        <div class="card-body">
            <h5 class="card-title">${lastNote.title}</h5>
            <p class="card-text">${lastNote.text}</p>
        </div>
    </section>    
    `
    cardWrapper.insertAdjacentHTML("afterbegin", html)
})

// Display notes based on array
notesArray.forEach(note => {

    const html = `
    <section class="card">
        <div class="card-body">
            <h5 class="card-title">${note.title}</h5>
            <p class="card-text">${note.text}</p>
        </div>
    </section>
    `

    cardWrapper.insertAdjacentHTML("afterbegin", html)
})