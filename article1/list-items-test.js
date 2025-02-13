document.addEventListener("DOMContentLoaded", function () {
    fetch('notes.json')
        .then(response => response.json())
        .then(data => {
            const notesData = data.note; // Extract JSON data
            const infoDiv = document.querySelector('.infoDiv');

            if (infoDiv) {
                const notesList = document.createElement('ol'); // Create an ordered list
                notesList.classList.add('notes-list');

                // Loop through each note object
                notesData.forEach(noteObject => {
                    const numbers = noteObject.numbers; // Extract numbers array
                    const notes = noteObject.notes; // Extract notes array

                    // Check if both arrays exist and have the same length
                    if (Array.isArray(numbers) && Array.isArray(notes) && numbers.length === notes.length) {
                        numbers.forEach((number, index) => {
                            const noteText = notes[index];

                            const listItem = document.createElement('li');
                            listItem.innerHTML = `
                                <span>${number}</span> 
                                <a href="${extractURL(noteText)}" target="_blank">${noteText}</a>
                            `;
                            notesList.appendChild(listItem);
                        });
                    } else {
                        console.error('Mismatch in numbers and notes arrays or invalid data format.');
                    }
                });

                // Append the list to the infoDiv
                infoDiv.appendChild(notesList);
            }
        })
        .catch(error => {
            console.error('Error fetching notes:', error);
        });

    // Function to extract URL from a note string
    function extractURL(note) {
        const urlRegex = /(https?:\/\/[^\s]+)/; // Match URLs starting with http/https
        const match = note.match(urlRegex);
        return match ? match[0] : '#'; // Return the URL or '#' if no URL is found
    }
});
