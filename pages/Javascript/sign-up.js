function Register(){

  var pantherId = document.getElementById("pantherId").value; // 9 digits
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var role = document.querySelector('input[name="role"]:checked').value;

  var params = {
    pantherId: pantherId,
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
    email: email,
    role:role
  }

  console.log(params)

  var user_create_url = common_url+"/users/create";  
  
  postData(user_create_url, params).then(data => {
    let message  = data.message;
    console.log(message);      
    alert(message);

});

}

