// Find elements on the page
const addNoteForm = document.querySelector("#addNoteForm");
const noteTextInput = document.querySelector("#noteText");
const cardWrapper = document.querySelector("#cardWrapper")

// Array with notes
const notesArray = [
    "JS Basics",
    "DOM Tree",
    "JS Events"
]

// Listen submit of form
addNoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Add text of note into array
    notesArray.push(noteTextInput.value);

    // Clear input value by clearing the entire form
    addNoteForm.reset();

    const lastNote = notesArray[notesArray.length - 1];
    const html = `
    <section class="card">
        <div class="card-body">
            <p class="card-text">${lastNote}</p>
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
            <p class="card-text">${note}</p>
        </div>
    </section>
    `

    cardWrapper.insertAdjacentHTML("afterbegin", html)
})