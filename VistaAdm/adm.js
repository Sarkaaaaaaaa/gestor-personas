const chatButton = document.querySelector('.chat-button');
const chatBox = document.querySelector('.chat-container');
const confirmedPatients = document.querySelector('.confirmed-patients');
const chatHeader = document.getElementById('chat-header');
const patientsList = document.getElementById('patients-list');
const chatBody = document.getElementById('chat-body');
const closeChatButton = document.getElementById('close-chat');

// Mostrar el chat y la lista de pacientes cuando se hace clic en el botón de chat
chatButton.addEventListener('click', () => {
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
    confirmedPatients.style.display = confirmedPatients.style.display === 'block' ? 'none' : 'block';
});

// Cerrar el chat
closeChatButton.addEventListener('click', () => {
    chatBox.style.display = 'none';
    confirmedPatients.style.display = 'none';
});

// Cambiar el nombre del paciente en el chat al seleccionarlo de la lista de pacientes confirmados
patientsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('patient')) {
        const patientName = e.target.getAttribute('data-name');
        chatHeader.innerText = `Chat con: ${patientName}`;
        chatBody.innerHTML = `<p>Chateando con ${patientName}...</p>`;
    }
});