function createDynamicTable(data) {
  const table = document.createElement('table');
  const headerRow = table.insertRow(0);

  for (const key in data[0]) {
    const headerCell = document.createElement('th');
    headerCell.textContent = key;
    headerRow.appendChild(headerCell);
  }

  for (const item of data) {
    const row = table.insertRow();
    for (const key in item) {
      const cell = row.insertCell();
      cell.textContent = item[key];
    }
  }

  return table;
}

const sampleData = [
  { Name: 'John', Age: 30, Country: 'USA' },
  { Name: 'Alice', Age: 25, Country: 'Canada' },
  { Name: 'Bob', Age: 35, Country: 'UK' },
];

const tableElement = createDynamicTable(sampleData);
document.body.appendChild(tableElement);
