window.addEventListener('DOMContentLoaded', function () {
    //When the page structure is loaded...
    var submit = document.getElementById('submitID');
    var odd = document.getElementById('oddID');
    var even =document.getElementById('evenID');
    
    submit.addEventListener('click', function(){
        if(odd.value % 2 ==1){
            odd.classList.add('valid');
            odd.classList.remove('invalid');
        }else{
            odd.classList.add('invalid');
            odd.classList.remove('valid');
        }
        if(even.value % 2 == 0){
            even.classList.add('valid');
            even.classList.remove('invalid');
        }else{
            even.classList.remove('valid');
            even.classList.add('invalid');
        }
        
    })
    
});
