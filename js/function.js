function form_validation(){
    // alert('hello');
    
     const email = document.getElementById("email").value;
     
     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

     if (email === "" || !filter.test(email)){
       document.getElementById('icon-error').style.display = 'block';
       document.getElementById('error-msg').style.display = 'block';
       document.getElementById('email').style.border = '2px solid #EE8B8B';
     }
     
}