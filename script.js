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


        document.addEventListener('DOMContentLoaded', function() {
            // DOM elements
            const chatToggle = document.querySelector('.chatbot-toggle');
            const chatBox = document.querySelector('.chatbot-box');
            const chatClose = document.querySelector('.chatbot-close');
            const messagesContainer = document.getElementById('chatMessages');
            const userInput = document.getElementById('userInput');
            const sendButton = document.getElementById('sendButton');
            
            // Chat knowledge base
    const knowledgeBase = {
        "name": ["My name is Tiyani Confidence Nyathi, a professional software developer.", "You can call me Tiyani or Confidence."],
        "who are you": ["I'm Tiyani Confidence Nyathi, an Honours Degree graduate from Vaal University of Technology, passionate about leveraging ICT for innovative solutions."],
        "what do you do": ["I work as a software developer. I've gained valuable experience in helpdesk and desktop support roles."],
        "education": ["I hold an Honours Degree in Information Technology from Vaal University of Technology."],
        "experience": ["I have experience as a Helpdesk Support Specialist and Desktop Support Technician, building skills in troubleshooting and IT solutions."],
        "skills": ["My skills include web development, front-end and back-end technologies, and UI/UX design."],
        "achievements": ["I successfully completed my Honours Degree and built several web development projects from scratch."],
        "contact": ["You can reach me via email at tiyanieyc33@gmail.com or connect with me on LinkedIn at linkedin.com/in/tiyani-confidence-334541197/."],
        "projects": ["I've worked on multiple web development projects focused on creating responsive and user-friendly applications."],
        "certifications": ["I possess certifications in web development and IT-related fields to enhance my technical expertise."],
        "location": ["I'm based in South Africa."],
        "email": ["You can reach me at tiyanieyc33@gmail.com."],
        "linkedin": ["Connect with me on LinkedIn at linkedin.com/in/tiyani-confidence-334541197/."],
        "graduation": ["I graduated with an Honours Degree from Vaal University of Technology."],
        "interests": ["I'm passionate about web development, IT systems, and design, aiming to create innovative digital solutions."],
        "hire": ["I'm open to new opportunities! Feel free to reach out via email or through my website's contact form."],
        "cv": ["You can download my CV directly from my website by clicking the 'Download CV' button on the homepage."],
        "university": ["I studied at Vaal University of Technology, earning my Honours Degree in Information Technology."],
        "portfolio": ["Welcome to my portfolio website! Explore my education, experience, skills, and achievements."]
    };
            
            // Greetings and fallback responses
            const greetings = ["hello", "hi", "hey", "greetings", "good morning", "good afternoon", "good evening"];
            const greetingResponses = ["Hello! How can I help you learn more about tiyani?", "Hi there! Got any questions about Rifuwo's experience or skills?", "Hey! I'm here to tell you all about tiyani. What would you like to know?"];
            
            const fallbackResponses = [
                "I don't have that specific information about Rifuwo. Would you like to know about his education, experience, or skills instead?",
                "I'm not sure about that. But I can tell you about tiyanis's background in dektop support if you're interested.",
                "I don't have details on that. Perhaps try asking about tiyani's education, work experience, or how to contact him?"
            ];
            
            // Suggested questions
            const suggestions = [
                "What's your education?",
                "Tell me about your experience",
                "What are your skills?",
                "How can I contact you?",
                "What projects have you worked on?",
                "Where are you located?",
                "What are your achievements?"
            ];
    
            // Chat functions
            function toggleChat() {
                chatBox.classList.toggle('active');
                if (chatBox.classList.contains('active') && messagesContainer.children.length === 0) {
                    // First time opening chat
                    addBotMessage("Hello! 👋 I'm tiyani's virtual assistant. How can I help you today?");
                    showSuggestions();
                }
            }
    
            function showSuggestions() {
                const suggestionsDiv = document.createElement('div');
                suggestionsDiv.className = 'suggestion-chips';
                
                // Select 4 random suggestions
                const randomSuggestions = suggestions.sort(() => 0.5 - Math.random()).slice(0, 4);
                
                randomSuggestions.forEach(suggestion => {
                    const chip = document.createElement('div');
                    chip.className = 'suggestion-chip';
                    chip.textContent = suggestion;
                    chip.addEventListener('click', () => {
                        handleUserInput(suggestion);
                    });
                    suggestionsDiv.appendChild(chip);
                });
                
                messagesContainer.appendChild(suggestionsDiv);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
    
            function addUserMessage(message) {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message user-message';
                messageDiv.textContent = message;
                messagesContainer.appendChild(messageDiv);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
    
            function addBotMessage(message) {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message bot-message';
                messageDiv.textContent = message;
                messagesContainer.appendChild(messageDiv);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
    
            function showTypingIndicator() {
                const typingDiv = document.createElement('div');
                typingDiv.className = 'thinking';
                typingDiv.id = 'typingIndicator';
                for (let i = 0; i < 3; i++) {
                    const dot = document.createElement('span');
                    typingDiv.appendChild(dot);
                }
                messagesContainer.appendChild(typingDiv);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
    
            function removeTypingIndicator() {
                const indicator = document.getElementById('typingIndicator');
                if (indicator) {
                    indicator.remove();
                }
            }
    
            function getResponse(input) {
                input = input.toLowerCase().trim();
                
                // Check for greetings
                if (greetings.some(greeting => input.includes(greeting))) {
                    return greetingResponses[Math.floor(Math.random() * greetingResponses.length)];
                }
                
                // Check knowledge base
                for (const [key, responses] of Object.entries(knowledgeBase)) {
                    if (input.includes(key)) {
                        return responses[Math.floor(Math.random() * responses.length)];
                    }
                }
                
                // For questions about "you" convert to third person
                if (input.includes("you") && !input.includes("contact you")) {
                    for (const [key, responses] of Object.entries(knowledgeBase)) {
                        // Replace "you" with appropriate key words
                        const modifiedInput = input
                            .replace("are you", key)
                            .replace("do you", key)
                            .replace("about you", "about " + key)
                            .replace("your", key);
                            
                        if (modifiedInput.includes(key)) {
                            return responses[Math.floor(Math.random() * responses.length)];
                        }
                    }
                }
                
                // Fallback
                return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
            }
    
            function handleUserInput(message = null) {
                // Get message either from parameter or input field
                const userMessage = message || userInput.value.trim();
                if (!userMessage) return;
                
                // Clear input field if it was used
                if (!message) userInput.value = '';
                
                // Add user message to chat
                addUserMessage(userMessage);
                
                // Show typing indicator
                showTypingIndicator();
                
                // Disable send button while "thinking"
                sendButton.disabled = true;
                
                // Simulate bot "thinking" delay
                setTimeout(() => {
                    removeTypingIndicator();
                    const botResponse = getResponse(userMessage);
                    addBotMessage(botResponse);
                    
                    // 33% chance to show suggestions after response
                    if (Math.random() < 0.33) {
                        showSuggestions();
                    }
                    
                    sendButton.disabled = false;
                }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
            }
    
            // Event listeners
            chatToggle.addEventListener('click', toggleChat);
            chatClose.addEventListener('click', toggleChat);
            
            sendButton.addEventListener('click', () => handleUserInput());
            
            userInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    handleUserInput();
                }
            });
            
            // Focus input when chat opens
            chatToggle.addEventListener('click', function() {
                if (chatBox.classList.contains('active')) {
                    setTimeout(() => userInput.focus(), 300);
                }
            });
        });
    