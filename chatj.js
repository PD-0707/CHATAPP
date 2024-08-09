document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send-button");
    const messagesContainer = document.querySelector(".msg");

    function addMessage() {
        const messageText = messageInput.value.trim();
        if (messageText === "") return;

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "sent");

        const messageContent = document.createElement("p");
        messageContent.textContent = messageText;

        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);
        messageInput.value = "";
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    sendButton.addEventListener("click", addMessage);
    messageInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            addMessage();
        }
    });
});
