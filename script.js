let banner = document.querySelector('.banner');
let menuToggle = document.querySelector('.toggle');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    banner.classList.toggle('active');
}

function toggleChat() {
    var chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "block" ? "none" : "block";
}

function sendMessage(event) {
    if (event.key === "Enter") {
        var inputField = document.getElementById("chat-input");
        var message = inputField.value.trim();
        if (message !== "") {
            var chatMessages = document.getElementById("chat-messages");
            var newMessage = document.createElement("p");
            newMessage.textContent = "You: " + message;
            chatMessages.appendChild(newMessage);
            inputField.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
}
