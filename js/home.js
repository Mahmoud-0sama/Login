


//******** to say welcome in home page *********//

var UserName = localStorage.getItem('welcomeUsername')
if(UserName){
    document.querySelector('#UserName').innerHTML = 'welcome ' + UserName
}




function logout(){
    localStorage.removeItem('welcomeUsername')
    window.location.assign('index.html')
}