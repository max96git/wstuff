const socket = io('http://localhost:5000');

// Handle publish form submission
const publishForm = document.getElementById('publishForm');
if (publishForm) {
    publishForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const itemName = document.getElementById('itemName').value;
        const itemDescription = document.getElementById('itemDescription').value;
        const itemPrice = document.getElementById('itemPrice').value;

        // Logic to publish item
        const newItem = { name: itemName, description: itemDescription, price: itemPrice };
        socket.emit('publishItem', newItem);
        
        alert(`Item Published: ${itemName}, ${itemDescription}, Price: ${itemPrice}`);
        publishForm.reset();
    });
}

// Listen for new items
socket.on('itemPublished', (item) => {
    const itemList = document.getElementById('itemList');
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>Price: ${item.price}</p>`;
    itemList.appendChild(itemDiv);
});
