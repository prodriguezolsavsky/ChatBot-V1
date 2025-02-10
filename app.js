// Configuración de AWS
AWS.config.update({
    region: 'us-west-2', // Región de tu bot
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-west-2:6ab097a6-3f2e-4d79-8b17-57075308d435' // Identity Pool ID
    })
});

const lexRuntime = new AWS.LexRuntime();

// Función para enviar mensajes al bot
function sendMessageToChatbot(message) {
    const params = {
        botAlias: 'TestBotAlias', // Alias del bot
        botName: 'Bot-test1-ene25', // Nombre del bot
        inputText: message,
        userId: 'user-id', // ID de usuario genérico
    };

    // Enviar el mensaje a Lex
    lexRuntime.postText(params, (err, data) => {
        if (err) {
            console.error(err);
            addMessageToChatBox('Chatbot', 'Hubo un error al procesar tu solicitud. Por favor, intenta de nuevo.');
            return;
        }

        // Mostrar la respuesta del bot
        addMessageToChatBox('Chatbot', data.message);
    });
}

// Función para agregar mensajes al chat
function addMessageToChatBox(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listener para el botón de enviar
document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        addMessageToChatBox('User', userInput);
        sendMessageToChatbot(userInput);
        document.getElementById('user-input').value = '';
    }
});

// Event listener para enviar mensaje al presionar "Enter"
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const userInput = document.getElementById('user-input').value;
        if (userInput.trim() !== '') {
            addMessageToChatBox('User', userInput);
            sendMessageToChatbot(userInput);
            document.getElementById('user-input').value = '';
        }
    }
});