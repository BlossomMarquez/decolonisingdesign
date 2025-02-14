document.addEventListener("DOMContentLoaded", function () {
    fetch('notes.json')
        .then(response => response.json())
        .then(data => {
            const notesData = data.note;


            notesData.forEach((noteItem) => {
                const infoDiv = document.querySelector('.infoDiv');
                if (infoDiv) {
                    const notesList = document.createElement('ol');
                    notesList.classList.add('notes-list');

                    const notes = Array.isArray(noteItem.notes) ? noteItem.notes : [noteItem.notes];
                    const numbers = Array.isArray(noteItem.numbers) ? noteItem.numbers : [noteItem.numbers];
                    const names = Array.isArray(noteItem.names) ? noteItem.names : [noteItem.names];
                    const links = Array.isArray(noteItem.links) ? noteItem.links : [noteItem.links];

                    const maxLength = Math.max(notes.length, numbers.length, names.length);

                    for (let i = 0; i < maxLength; i++) {
                        const listItem = document.createElement('li');

                        const note = notes[i] !== undefined ? notes[i] : 'N/A';
                        const number = numbers[i] !== undefined ? numbers[i] : 'N/A';
                        const name = names[i] !== undefined ? names[i] : 'N/A';
                        const link = links[i] !== undefined ? links[i] : 'N/A';

                        listItem.innerHTML = `<a name="${name}" href="${link}">${number}</a> ${note}`;
                        notesList.appendChild(listItem);
                    }
                    infoDiv.appendChild(notesList);
                }
            })
        });
});