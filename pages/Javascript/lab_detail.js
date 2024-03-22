$(document).ready(function () {
    //var username = "miyeon";
    var username = getCookie("username");

    document.getElementById('datePosted').value = new Date().toISOString().substring(0, 10);
  
  });
  

  function creationPost() {
    var content = document.getElementById("textarea_content").value;
    var datePosted = document.getElementById("datePosted").value;
    var pantherId = "001002003"; // test
    //getCookie("pantherId"); //real
    //document.getElementById("pantherId").value;
    var lab = "lab-coms"; // test
    //document.getElementById("new_course").value;

    var params = {
      content: content,
      datePosted: datePosted,
      author: {pantherId:pantherId},
      lab: {name:lab}
    }

    console.log(params);

    var post_create_url = common_url + "/posts/create";

    postData(post_create_url, params).then(data => {
      let message = data.message;
      console.log(message);
      alert(message);
    });
  }