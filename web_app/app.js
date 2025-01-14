document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessageToChatBox('User', userInput);
        sendMessageToChatbot(userInput);
        document.getElementById('user-input').value = '';
    }
});

function addMessageToChatBox(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessageToChatbot(message) {
    fetch('https://your-api-gateway-endpoint.com/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        addMessageToChatBox('Chatbot', data.response);
    })
    .catch(error => {
        console.error('Error:', error);
        addMessageToChatBox('Chatbot', 'Hubo un error al procesar tu solicitud. Por favor, intenta de nuevo.');
    });
}