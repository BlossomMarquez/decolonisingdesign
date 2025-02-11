document.addEventListener("DOMContentLoaded", function () {
    fetch('notes.json')
        .then(response => response.json())
        .then(data => {
            const notesData = data.note; //Constructs JSON shorthands into "X" i.e. data.bas becomes bands


            notesData.forEach((noteItem, index) => {
                const infoDiv = document.querySelector('.infoDiv');
                if (infoDiv) {
                    const notesList = document.createElement('ol');
                    notesList.classList.add('notes-list');

                    if (Array.isArray(noteItem.notes)) {
                        noteItem.notes.forEach((note, idx) => {
                            const listItem = document.createElement('li');
                            listItem.textContent = note;
                            notesList.appendChild(listItem);
                        });
                    } else {
                        const listItem = document.createElement('li');
                        listItem.textContent = noteItem.notes; //For non-array list
                        notesList.appendChild(listItem);
                    }
                
                //Populates divs with data
                infoDiv.appendChild(notesList);
            }
        });
})
    .catch(error => {
        console.error('Error fetching notes', error);
    });
});