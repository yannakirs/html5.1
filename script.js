   // 1
   function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    const storage = getStorage();
    const keys = Object.keys(storage);

    if (keys.length === 0) {
      const emptyRow = document.createElement('tr');
      const emptyHeader = document.createElement('td');
      emptyHeader.textContent = 'Данные отсутсвуют';
      emptyHeader.setAttribute('colspan', '3');
      emptyRow.appendChild(emptyHeader);
      tableBody.appendChild(emptyRow);
    } else {
      keys.forEach(key => {
        const value = storage[key];
        const row = document.createElement('tr');
        const keyCell = document.createElement('td');
        keyCell.textContent = key;
        row.appendChild(keyCell);

        const valueCell = document.createElement('td');
        valueCell.textContent = value;
        row.appendChild(valueCell);

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'X';
        deleteButton.setAttribute('onclick', `deleteItem('${key}')`);
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        tableBody.appendChild(row);
      });
    }
  }

  // 2
  function getStorage() {
    return localStorage; 
  }
  // 3
  function saveItem(key, value) {
    const storage = getStorage();
    storage.setItem(key, value);
    updateTable();
  }
  // 4
  function deleteItem(key) {
    if (confirm('Вы уверены, что хотите удалить эту запись?')) {
      const storage = getStorage();
      storage.removeItem(key);


      updateTable();
    }
  }
  //5
  function clearStorage() {
    if (confirm('Вы уверены, что хотите полностью очистить локальное хранилище?')) {

      const storage = getStorage();
      storage.clear();
      updateTable();
    }
  }
  window.onload = updateTable;