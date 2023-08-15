document.getElementById('submitBtn').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const email = emailField.value;
    if(!email.includes('@') || email === ''){
        alert('সঠিক ইমেইল দাউ');
        return;
    }
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    if(password === '' || password != 'secret' ){
        alert('সঠিক পাসওয়ার্ড দাউ');
        return;
    }
    if(email ==='sontan@gmail.com' && password ==='secret'){
        window.location.href = 'bank.html';
    }else{
        alert('ইমেইল ও পাসওয়ার্ড ভুল');
        return;
    }
})
