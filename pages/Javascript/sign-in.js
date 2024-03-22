function Login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var params = {
      username: username
    , password: password
  }

  var login_url = common_url + "/users/login";

  postData(login_url,params)
  .then(data => {
      let loginSuccessYN  = data.login;
      console.log(loginSuccessYN);      

      if(loginSuccessYN === true){
        setCookie("username",username,1);
        location.href="./dashboard.html";
      }else{
        alert("Login Failed");
      }
  });
<<<<<<< HEAD

  


  
=======
>>>>>>> 815862c49c3f69ba3b5c69c10350199afe2b5332
    
}


