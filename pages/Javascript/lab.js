$(document).ready(function () {
  //var username = "miyeon";
  var username = getCookie("username");
  var startDate = new Date();
  startDate.setDate(startDate.getDate() - 90);

  document.getElementById('startdate').value = startDate.toISOString().substring(0, 10);
  document.getElementById('enddate').value = new Date().toISOString().substring(0, 10);

});


function Class_Search() {
  var startDate = document.getElementById("startdate").value; //1/1/2024
  var endDate = document.getElementById("enddate").value;//1/1/2024
  var labname = document.getElementById("labname").value;

  var params = {
    startDate: { start: startDate, end: endDate }
  }

  var lab_all_url = common_url + "/labs";
  var count=1;
  fetch(lab_all_url)
    .then((response) => {
      return response.json();
    })
    .then(data => {
      let list = data;
      list.map(function (data) {
        let name = data.name;
        let startDate = data.startDate;
        let endDate = data.endDate;
        let course = data.course;
        console.log(name);
        getTable(true,name,startDate,endDate,course,count);
        count++;
      });
    })
    .catch(error => {
      //handle error
    });

}

function getTable(rowYN, name, startDate, endDate, course,count) {
  var table = document.getElementById('labTable');

  if (rowYN === true) {
    var new_row = table.insertRow();
    var cell_length = table.rows[0].cells.length;

    for (let i = 0; i < cell_length; i++) {
      var new_cell = new_row.insertCell();
      var temp_html='';
      if (i == 0) {
          temp_html="<td>"+
          "<div class=\'d-flex px-2\'>"+
           "<span class=\'text-secondary text-sm font-weight-bold'\>"+count+"</span></div>"+
           "</td>";
      }
      else if(i==1){
        temp_html = "<td>"+
        "<div class=\"d-flex flex-column justify-content-center\">"+
          "<h6 class=\"mb-0 text-sm\">"+course+"</h6>"+
          "<p class=\"text-xs text-secondary mb-0\">"+name+"</p>"+
        "</div>"+
      "</td>";
      }else if(i==2){
        temp_html = "<td>"+
        "<div class=\"align-middle text-center text-sm\">"+
          "<h6 class=\"mb-0 text-sm\">John Michael</h6>"+
        "</div>"+
      "</td>";
      }else if(i==3){
        temp_html = "<td>"+
        "<div class=\"align-middle text-center text-sm\">"+
          "<span class=\"text-secondary text-xs font-weight-bold\">"
          +startDate.substring(0,10)+ " ~ " +endDate.substring(0,10)+"</span>"+
        "</div>"+
      "</td>";
      }
      else{
        temp_html = "<td>"+
        "<div class=\"align-middle text-center text-sm\">"+
          "<a class=\"text-secondary font-weight-bold text-xs\">Enter</a>"
        "</div>"+
      "</td>";
       
      }

      new_cell.innerHTML=temp_html;
    }


  }
  else { rowYN == false } {

  }


}

function creationLab() {
  var name = document.getElementById("name").value; // 9 digits
  var startDate = document.getElementById("startDate").value;
  var endDate = document.getElementById("endDate").value;
  var course = document.getElementById("course").value;

  var S = {
    name: name,
    startDate: startDate,
    endDate: endDate,
    course: course
  }

  console.log(params);

  var lab_create_url = common_url + "/labs/create";

  postData(lab_create_url, params).then(data => {
    let message = data.message;
    console.log(message);
    alert(message);
    location.reload(true);


  });
}

function validation() {

}