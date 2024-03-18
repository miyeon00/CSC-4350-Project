function get_profile(username){
    var params = {
        username : username
      };

    var user_filter_url = common_url+"/users/filter";
  
    $.ajax({
        type: "Post",
        url: user_filter_url,
        data: params,
        success: function (res) {
          alert(res.message);
          // List a customer infos by username
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          alert("error")
        }
      });
    
}

function profile_update(){
    var pantherId = document.getElementById("username").value; // 9 digits
    var username = document.getElementById("password").value;
    var password = document.getElementById("password").value;
    var firstName = document.getElementById("password").value;
    var lastName = document.getElementById("password").value;
    var email = document.getElementById("password").value;
    var role = document.getElementById("password").value;
  
    var params = {
      pantherId: pantherId,
      username: username,
      password: password,
      firstName: firstname,
      lastName: lastname,
      email: email,
      role:role
    };
  
    var user_create_url = common_url+"/users/create";
  
    $.ajax({
      type: "Post",
      url: user_create_url,
      data: params,
      success: function (res) {
        alert(res.message);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert("error")
      }
    });
}