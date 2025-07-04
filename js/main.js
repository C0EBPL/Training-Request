// js/main.js
const topics = [
  { id: 'T001', name: 'Digital Learning Basics' },
  { id: 'T002', name: 'Inclusive Classroom Models' }
];

const schools = {
  SCH001: { name: 'Green Valley High', address: '123 Hilltop Drive' },
  SCH002: { name: 'Blue Ridge School', address: '456 Sunset Avenue' }
};

window.addEventListener('DOMContentLoaded', () => {
  const code = localStorage.getItem('schoolCode');
  if (!code || !schools[code]) {
    alert("Invalid or missing school code. Redirecting...");
    window.location.href = 'index.html';
    return;
  }

  document.getElementById('school_code').value = code;
  document.getElementById('school_name').value = schools[code].name;
  document.getElementById('school_address').value = schools[code].address;

  const topicDropdown = document.getElementById('training_topic');
  topics.forEach(topic => {
    const option = document.createElement('option');
    option.value = topic.id;
    option.text = topic.name;
    topicDropdown.appendChild(option);
  });

  document.getElementById('requestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Training request submitted successfully!');
    // You can later hook this to Firebase or API to save requests
  });
});
