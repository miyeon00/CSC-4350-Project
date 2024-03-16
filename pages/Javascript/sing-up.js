function Register(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    var params = {
      username: username
      , password: password
    }
  
    var login_url = "http://18.221.233.120/users/login"
  
    $.ajax({
      type: "Get",
      url: login_url,
      data: params,
      success: function (res) {
        alert(res.message);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert("error")
      }
    });

}