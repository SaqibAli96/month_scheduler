const saveBtn = document.getElementById('save-btn');
const rows = document.querySelectorAll('tbody tr');

// Load saved data from local storage
for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  const day = row.cells[0].textContent;
  const taskDescription = localStorage.getItem(`day-${i+1}-task-description`);
  const completed = localStorage.getItem(`day-${i+1}-completed`);
  const remaining = localStorage.getItem(`day-${i+1}-remaining`);
  row.cells[1].textContent = taskDescription;
  row.cells[2].textContent = completed;
  row.cells[3].textContent = remaining;
}

// Save data to local storage when Save button is clicked
saveBtn.addEventListener('click', () => {
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const day = row.cells[0].textContent;
    const taskDescription = row.cells[1].textContent;
    const completed = row.cells[2].textContent;
    const remaining = row.cells[3].textContent;
    localStorage.setItem(`day-${i+1}-task-description`, taskDescription);
    localStorage.setItem(`day-${i+1}-completed`, completed);
    localStorage.setItem(`day-${i+1}-remaining`, remaining);
  }
  alert('Data saved to local storage!');
});
