let registeredUsers = [];


const form = document.getElementById('registrationForm');
const tableBody = document.getElementById('userTableBody');


form.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();

  
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    return;
  }

  
  const userData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    age: document.getElementById('age').value,
    gender: document.getElementById('gender').value
  };

  
  registeredUsers.push(userData);

  
  updateTable();

  
  form.reset();
  form.classList.remove('was-validated');

  
  alert('Registration successful!');
});


function updateTable() {
  tableBody.innerHTML = '';
    
  registeredUsers.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.age}</td>
      <td>${user.gender}</td>
    `;
    tableBody.appendChild(row);
  });
}