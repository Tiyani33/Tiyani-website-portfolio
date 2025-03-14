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
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').split('.')[0];
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Hover effect to dynamically change text color
document.querySelectorAll('.content-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = '#66fcf1';
        box.style.color = '#1f2833';
    });
    box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = '#45a29e';
        box.style.color = 'white';
    });
});
