document.getElementById('submitBtn').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const email = emailField.value;
    if(!email.includes('@')){
        alert('please provide a valid email')
    }
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    if(email ==='sontan@gmail.com' && password ==='secret'){
        console.log('valid user');
    }else{
        console.log('invalid user')
    }
})