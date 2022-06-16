const form = document.getElementById('formm');
const first = document.getElementById('firstname').value;
const last = document.getElementById('Lastname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

form.addEventListener('submit', e => {
    e.preventDefault();

    const first = document.getElementById['firstname'].value;
const last = document.getElementById['Lastname'].value;
const email = document.getElementById['email'].value;
const password = document.getElementById['password'].value;

if (firstName == ''){
    addErrorTo('firstname' , 'First Name is required');
}

if (lastName == ''){
    addErrorTo('lastName' , 'Last Name is required');
}

if (email == ''){
    addErrorTo('firstname' , 'Email  is required');
}
else if (!isValid(email)){
    addErrorTo('email', 'Email is not valid')
}
    else{
        removeErrorFrom('email');
    }


if (password == ''){
    addErrorTo('firstname' , 'password is required');
}

alert(first+last+email+password);
});

function addErrorTo(field, ) {
    const small =form[field].parentNode.querySelector('small')
    small.innerText = message;
    small.style.opacity = '1'
}