

var loginBtn = document.querySelector('#loginBtn')
var registerBtn = document.querySelector('#registerBtn')
var loginIconBtn = document.querySelector('#loginIconBtn')
var registerIconBtn = document.querySelector('#registerIconBtn')
var loginForm = document.querySelector('.login-container')
var registerForm = document.querySelector('.register-container')
var fluid = document.querySelector('#fluid')

var loginEmailInput = document.querySelector('#loginEmailInput')
var loginPasswordInput = document.querySelector('#loginPasswordInput')
// var signinInput = document.querySelector('#signinInput')

var userNameInput = document.querySelector('#userNameInput')
var regEmailInput = document.querySelector('#regEmailInput')
var regPasswordInput = document.querySelector('#regPassword')


    // to get base url (localhost)
    var pathparts = location.pathname.split('/');
    var baseURL = ''
    for (var i = 0; i < pathparts.length - 1; i++) {
        baseURL += '/' + pathparts[i]
    }
    console.log(baseURL);





var signupArr;

if(localStorage.getItem('users') == null){
    signupArr = []
}else{
    signupArr = JSON.parse(localStorage.getItem('users'))
}


function viewLogin(){
    loginForm.style.left = 0;
    registerForm.style.left = '100%';
    
    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;

    fluid.classList.add('fluid-animate');
}
function viewRegister(){
    loginForm.style.left = '-100%';
    registerForm.style.left = 0;

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;

    fluid.classList.add('fluid-animate');
}


registerBtn.addEventListener('click', viewRegister);

loginBtn.addEventListener('click', viewLogin);

registerIconBtn.addEventListener('click', viewRegister);

loginIconBtn.addEventListener('click', viewLogin);


fluid.addEventListener('animationend', function(e){
    fluid.classList.remove('fluid-animate')
})



//*********  Login in *********//
//for check inputs is empty or not
function isLoginEmpty(){
    if(loginEmailInput.value == "" || loginPasswordInput.value == ""){
        return false
    }else{
        return true
    }
    
}

function login(){
    if(isLoginEmpty() == false){
        document.querySelector('#incorrect').innerHTML = `<span class="text-danger">All inputs is required</span>`
        return false
    }
    
    var email = loginEmailInput.value
    var password = loginPasswordInput.value
    for(var i = 0 ; i < signupArr.length; i++){
        if(signupArr[i].email.toLowerCase() == email.toLowerCase() && signupArr[i].password.toLowerCase() == password.toLowerCase()){
            localStorage.setItem('welcomeUsername', signupArr[i].name);

            window.location.assign('home.html');

        }else{
            document.querySelector('#incorrect').innerHTML = '<span class="text-danger">incorrect email or password</span>'
        }
    }

}


signinInput.addEventListener('click', function(){
    login();
})



// ****** register******//
// for check inputs is empty or not

function registerEmpty(){
    if(userNameInput.value == "" || regEmailInput.value == "" || regPasswordInput.value == ""){
        return false
    }else{
        return true
    }
}

// 'string'.toLowerCase
function emailExist(){
    for(var i = 0 ; i < signupArr.length ; i++){
        if(signupArr[i].email.toLowerCase() == regEmailInput.value.toLowerCase()){
            return false
        }
    }
}

function register(){
    if(registerEmpty() == false){
        document.querySelector('#exists').innerHTML = `<span class="text-danger">All inputs is required</span>`
        return true
    }
        
  

    var register ={
        name : userNameInput.value,
        email : regEmailInput.value,
        password : regPasswordInput.value,
    }
    if(signupArr.length == 0){
        signupArr.push(register)
        localStorage.setItem('users', JSON.stringify(signupArr))
        document.querySelector('#exists').innerHTML = `<span class="text-success">Success</span>`
        return true
    }
    if(emailExist() == false){
        document.querySelector('#exists').innerHTML = `<span class="text-danger">email already exists</span>`
    }else{
        signupArr.push(register)
        localStorage.setItem('users', JSON.stringify(signupArr))
        document.querySelector('#exists').innerHTML = `<span class="text-success">Success</span>`
    }
}



signupInput.addEventListener('click', function(){
    register();
})





