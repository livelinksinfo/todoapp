const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

//form event
form.addEventListener('submit', addForm);
// Delete Event
itemList.addEventListener('click', removeItem)
    // Filter Event
filter.addEventListener('keyup', filterItem);

function addForm(e) {
    e.preventDefault();
    console.log();
    //creating now item
    let newItem = document.getElementById('item').value;
    // creating new li
    const li = document.createElement('li');
    // adding class to li
    li.classList = 'list-group-item';
    let textNote = document.createTextNode(newItem);
    // Adding text Note to li from textbox
    li.appendChild(textNote);
    // creating delete button in the li
    const deleteBtn = document.createElement('button');
    // adding text note to deleteBtn
    deleteBtn.appendChild(document.createTextNode('X'));
    // adding class to delete button
    deleteBtn.classList = 'btn btn-danger float-right delete';
    // appending deletebtn to li
    li.appendChild(deleteBtn);
    console.log(li)
        // Appending li to ul
    itemList.appendChild(li)

}
// remove items
function removeItem(e) {
    //  e.preventDefault();
    if (e.target.classList.contains('delete')) {
        if (confirm('Do you want to delete this item?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }

}

function filterItem(e) {
    // getting text form input
    const text = e.target.value.toLowerCase();
    // console.log(text);
    // getting all li in ul
    const items = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(item) {
        const itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

}