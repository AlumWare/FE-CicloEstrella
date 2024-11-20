
function toggleChatbot() {
    const chatbotOverlay = document.getElementById('chatbot-overlay');
    if (chatbotOverlay.style.display === 'block') {
        chatbotOverlay.style.display = 'none';
    } else {
        chatbotOverlay.style.display = 'block';
    }
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const messages = document.querySelector('.chatbot-messages');

    if (input.value.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = input.value;
        messages.appendChild(userMessage);

        input.value = '';

        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = 'Gracias por tu mensaje. Estoy aquí para ayudarte.';
        messages.appendChild(botMessage);

        messages.scrollTop = messages.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('./chatbot.html') 
        .then(response => {
            if (!response.ok) throw new Error('Error al cargar el chatbot');
            return response.text();
        })
        .then(html => {
            const container = document.createElement('div');
            container.innerHTML = html;
            document.body.appendChild(container);

            const chatbotOverlay = document.getElementById('chatbot-overlay');
            chatbotOverlay.style.display = 'none';
        })
        .catch(error => console.error('Error cargando el chatbot:', error));
});