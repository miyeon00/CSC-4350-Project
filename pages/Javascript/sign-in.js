function Login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var params = {
    username: username
    , password: password
  }

  //var login_url = common_url+"/users/login";

  //Test Function

  if(username =="test" && password =="test"){
    //alert("success");
    setCookie("username",username,1);
    setCookie("password",password,1);
    window.location.href = "./dashboard.html"; 
  }else{
    alert("fail");
  }
}
/*
  $.ajax({
    type: "Post",
    url: login_url,
    data: params,
    dataType: 'json',
    contentType:'application/json',    
    success: function (res) {
      alert(res.message);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      alert(errorThrown);
    }
  });
  
}


*/


