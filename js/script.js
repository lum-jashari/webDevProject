const username1 = document.getElementById('loginUsername');
const username2 = document.getElementById('regUsername');

const email = document.getElementById('regEmail');

const password1 = document.getElementById('loginPassword');
const password2 = document.getElementById('regPassword');

const form1 = document.getElementById('loginForm');
const form2 = document.getElementById('regForm');

const errorElement = document.getElementById('error')

loginForm.addEventListener('submit', (e) => {
     // e.preventDefault();
     let messages = [];
     if (username1.value === '' || username1.value == null) {
          messages.push('username is required')
     }
     if (password1.value === '' || password1.value == null) {
          messages.push('password is required')
     }
     if (password1.value.length <= 6) {
          messages.push('Password must be longer than 8 characters!')
     }
     if (password1.value.length > 20) {
          messages.push('Password must be less than 20 characters!')
     }
     if (password1.value == 'password') {
          messages.push('Password cannot be se to password!')
     }

     if (messages.length > 0) {
          e.preventDefault()
          errorElement.innerText = messages.join(' and ')
     }
});

form2.addEventListener('submit', (e) => {
     // e.preventDefault();
     let messages = [];

     if (email.value === '' || email.value == null) {
          messages.push('Email is required')
     }

     if (username2.value === '' || username2.value == null) {
          messages.push('Username is required')
     }
     if (password2.value === '' || password2.value == null) {
          messages.push('Password is required')
     }
     if (password2.value.length <= 6) {
          messages.push('Password must be longer than 8 characters!')
     }
     if (password2.value.length > 20) {
          messages.push('Password must be less than 20 characters!')
     }
     if (password2.value == 'password') {
          messages.push('Password cannot be set to password!')
     }

     if (messages.length > 0) {
          e.preventDefault()
          errorElement.innerText = messages.join(' and ')
     }
});