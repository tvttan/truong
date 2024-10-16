let notes = [];

// Lấy textarea và các phím
const note = document.getElementById('note');
const keys = document.querySelectorAll('.key');
const notesList = document.getElementById('notesList');
const saveNoteButton = document.getElementById('saveNote');

// Xử lý sự kiện click cho mỗi phím
keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.textContent;
        if (key.id === 'space') {
            note.value += ' ';
        }
        else if (key.id === 'backspace') {
            note.value = note.value.slice(0, -1);
        } else {
            note.value += keyValue;
        }
        note.focus();
    });
});

// xử lý sự kiện click thêm vào nút +
saveNoteButton.addEventListener('click', () => {
    const noteText = note.value.trim();
    if (noteText === '') return;

    // Thêm ghi chú vào danh sách với thuộc tính hoàn thành
    notes.push({ text: noteText, completed: false });
    note.value = '';
    renderNotes();
});

// Xóa ghi chú
function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}



// Hiển thị danh sách ghi chú
function renderNotes() {
    notesList.innerHTML = '';  // Xóa danh sách hiện tại

    notes.forEach((note, index) => {
        const noteItem = document.createElement('div');
        noteItem.classList.add('note-item');

        // Kiểm tra trạng thái của ghi chú để gạch ngang nếu hoàn thành
        const noteStyle = note.completed ? 'text-decoration: line-through;' : '';

        noteItem.innerHTML = `
            <span style="${noteStyle}">${note.text}</span>
            <div class="note-actions">
                <input type="checkbox" >
                <button onclick="deleteNote(${index})">Xóa</button>
            </div>
        `;

        notesList.appendChild(noteItem);  // Thêm ghi chú vào danh sách
    });
}

