//variables
const valueInput = document.getElementById('value');
const nameInput = document.getElementById('name');
const tableOutput = document.getElementById('transaction-list');

let counter = JSON.parse(localStorage.getItem('counter')) || 0;

let transactionList = JSON.parse(localStorage.getItem('transactionList')) || [];

if (transactionList,length > 0) {
    transactionList.forEach(transaction => {
        TableRowCreator({id: transaction.id, ...transaction});
    });
}

function TableRowCreator(transaction) {
    const newRow = document.createElement('tr');
    newRow.id =transaction.id;
    newRow.innerHTML = `
    <td>${transaction.id}</td>
    <td>${transaction.name}</td>
    <td>${transaction.value}</td>
    <td>
        <button onClick= 'DeleteFunction(${trasnsaction.id})>X</button>
    </td>
    `
    tableOutput.appendChild(newRow);
}

function AddTransaction() {

    TableRowCreator({
        id: (counter + 1),
        name: nameInput.value,
        value: valueInput.value
    });
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${counter + 1}</td>
    <td>${nameInput.value}</td>
    <td>${valueInput.value}</td>
    <td>
        <button>X</button>
    </td>
    `

    tableOutput.appendChild(newRow);

    transactionList.push({
        id: counter,
        name: nameInput.value,
        value: valueInput.value
    });

    localStorage.setItem('transactionList', JSON.stringify(transactionList));
    localStorage.setItem('counter', JSON.stringify(counter));

    valueInput.value = 0;
    nameInput.value = '';
    counter++;
}

function DeleteFunction(id) {
    transactionList = transactionList.filter(transaction => transaction.id !== id);
    localStorage.setItem('transactionList', JSON.stringify(transactionList));
    tableOutput.innerHTML = '';
    transactionList.forEach(transaction => {
        TableRowCreator(transaction);
    });
}