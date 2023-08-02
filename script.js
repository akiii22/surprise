const messages = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "You inspire me to be a better person every day.",
  "The only way to do great work is to love what you do.",
  "Your beauty illuminates the room, your kindness warms hearts, and your cuteness adds a sprinkle of joy to every moment.",
  "In your presence, beauty finds a new definition, kindness finds a true friend, and cuteness finds its perfect embodiment.",
  "A rare gem: your beauty enchants, your kindness inspires, and your cuteness melts even the toughest hearts.",
  "You're a masterpiece of beauty, a symphony of kindness, and an embodiment of cuteness that brightens every corner of life.",
  "Like a radiant sunrise, your beauty captivates; like a gentle breeze, your kindness soothes; and like a playful kitten, your cuteness brings endless smiles."
];

const message = document.getElementById("message");
const button = document.getElementById("button");

function getRandomMessage() {
  const index = Math.floor(Math.random() * messages.length);
  message.innerHTML = messages[index];
}

getRandomMessage();

button.addEventListener("click", getRandomMessage);
