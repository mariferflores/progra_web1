// Respuestas del chatbot
const responses = {
    "Hola": "¡Hola! ¿En qué puedo ayudarte?",
    "¿Cómo estás?": "Estoy bien, gracias por preguntar.",
    "¿Cuál es tu nombre?": "Mi nombre es Chatbot.",
    "Adiós": "¡Hasta luego! Que tengas un buen día."
};

// Función para iniciar la conversación
function startConversation() {
    const chatBox = document.getElementById("chat-box");
    const responseOptionsDiv = document.getElementById("response-options");

    // Limpiar el chat y las opciones de respuesta
    chatBox.innerHTML = "";
    responseOptionsDiv.innerHTML = "";

    // Saludo inicial del bot
    chatBox.innerHTML += `<div class="message bot-message">¡Hola! Soy un chatbot. ¿En qué puedo ayudarte?</div>`;

    // Mostrar las opciones de respuesta
    for (const response in responses) {
        responseOptionsDiv.innerHTML += `<button onclick="sendMessage('${response}')">${response}</button>`;
    }
}

// Función para enviar mensajes
function sendMessage(userInput) {
    const chatBox = document.getElementById("chat-box");

    // Agregar mensaje del usuario al chat
    chatBox.innerHTML += `<div class="message user-message">${userInput}</div>`;

    // Verificar si hay una respuesta del chatbot
    if (responses[userInput]) {
        chatBox.innerHTML += `<div class="message bot-message">${responses[userInput]}</div>`;
    } else {
        chatBox.innerHTML += `<div class="message bot-message">Lo siento, no entiendo. ¿Puedes repetir?</div>`;
    }
}
