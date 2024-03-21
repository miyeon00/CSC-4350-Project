function Login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var params = {
      username: username
    , password: password
  }

  var login_url = common_url + "/users/login";
    
  postData(login_url, params).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
    
}




