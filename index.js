// Adding a simple JavaScript functionality for the button
document.getElementById('clickButton').addEventListener('click', function() {
  const message = document.getElementById('message');
  message.classList.remove('hidden');
});
