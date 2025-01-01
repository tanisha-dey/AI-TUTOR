document.getElementById('send-button').addEventListener('click', handleSendMessage);
document.getElementById('chat-input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleSendMessage(e);
  }
});

function handleSendMessage(e) {
  e.preventDefault();
  const inputElement = document.getElementById('chat-input');
  const userMessage = inputElement.value.trim();

  if (!userMessage) return;

  addMessage('user', userMessage);
  const botResponse = getBotResponse(userMessage);
  setTimeout(() => addMessage('bot', botResponse), 500); // Add a small delay for a natural feel

  inputElement.value = '';
}

function addMessage(sender, text) {
  const messageContainer = document.getElementById('chat-messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = text;
  messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
  messageContainer.appendChild(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

function getBotResponse(input) {
  const lowerInput = input.toLowerCase();
  const responses = {
    "what is a redox reaction": "A redox reaction is a chemical reaction involving the transfer of electrons between two species.",
    "define oxidation": "Oxidation is the loss of electrons or an increase in oxidation state by a molecule, atom, or ion.",
    "define reduction": "Reduction is the gain of electrons or a decrease in oxidation state by a molecule, atom, or ion.",
    "example of redox reaction": "An example is the reaction between hydrogen and fluorine: H2 + F2 → 2HF.",
    "what is an oxidizing agent": "An oxidizing agent is a substance that gains electrons and is reduced in a chemical reaction.",
    "what is a reducing agent": "A reducing agent is a substance that loses electrons and is oxidized in a chemical reaction.",
    "application of redox reactions": "Redox reactions are used in batteries, electroplating, and metabolic processes.",
    "what is corrosion": "Corrosion is a redox reaction where metals react with the environment, such as iron rusting.",
    "how do batteries work": "Batteries use redox reactions to convert chemical energy into electrical energy.",
    "difference between oxidation and reduction": "Oxidation is the loss of electrons, while reduction is the gain of electrons."
  };

  return responses[lowerInput] || "I'm sorry, Can you rephrase that.";
}
