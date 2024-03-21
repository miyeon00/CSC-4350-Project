function Login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var params = {
      username: username
    , password: password
  }

  var login_url = common_url + "/users/login";

  // It will update to Post method with params
  //
    
}


