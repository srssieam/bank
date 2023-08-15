document.getElementById('submitBtn').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const email = emailField.value;
    if(!email.includes('@') || email === ''){
        alert('please provide a valid email');
    }
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    if(password === ''){
        alert('You can not login without password');
    }
    if(email ==='sontan@gmail.com' && password ==='secret'){
        window.location.href = 'bank.html';
    }else{
        alert('invalid user')
    }
})
