var icon = document.getElementById('icon');

icon.onclick = function(){
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
        icon.className = "uil-sun icon";
    }else{
        icon.className = "uil-moon icon";
    }
}