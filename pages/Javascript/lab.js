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
  var count = 1;
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
        console.log(course);
        getTable(false, name, startDate, endDate, course);
        count++;
      });
    })
    .catch(error => {
      //handle error
    });

}

function getTable(addYN, name, startDate, endDate, course) {
  var table = document.getElementById('labTable');
  var new_row = table.insertRow();
  var cell_length = table.rows[0].cells.length;

  for (let i = 0; i < cell_length; i++) {
    var new_cell = new_row.insertCell();
    var temp_html = '';
    if (i == 0) {
      temp_html = "<td>" +
        "<div class=\'d-flex px-2\'>" +
        "<span class=\'text-secondary text-sm font-weight-bold'\><i class=\"bi bi-book\"></i></span></div>" +
        "</td>";
    }
    else if (i == 1) {
      let courseHtml = addYN ? "<input type='\text\' id='new_course' />" : course ;
      let nameHtml = addYN ? "<input type='\text\' id='new_name' />" : name ;
      temp_html = "<td>" +
        "<div class=\"d-flex flex-column justify-content-center\">" +
        "<h6 class=\"mb-0 text-sm\">" + courseHtml + "</h6>" +
        "<p class=\"text-xs text-secondary mb-0\">" + nameHtml + "</p>" +
        "</div>" +
        "</td>";
    } else if (i == 2) {
      temp_html = "<td>" +
        "<div class=\"align-middle text-center text-sm\">" +
        "<h6 class=\"mb-0 text-sm\">John Michael</h6>" +
        "</div>" +
        "</td>";
    } else if (i == 3) {
      
      let infos = addYN ? "<input type=\"date\" id=\"new_startdate\" data-date-format=\"mm/dd/yyyy\" class=\"form-control\"> ~ "+
        "<input type=\"date\" id=\"new_enddate\" data-date-format=\"mm/dd/yyyy\" class=\"form-control\">"
        : startDate.substring(0, 10) + " ~ " + endDate.substring(0, 10);
      temp_html = "<td>" +
        "<div class=\"align-middle text-center text-sm\">" +
        "<span class=\"text-secondary text-xs font-weight-bold\">"
        + infos + "</span>" +
        "</div>" +
        "</td>";
    }
    else {
      let buttontext = addYN ? "<button class='\ bg-gradient-warning text-dark \' onclick='creationLab()'>register</button>" : "<a class=\"text-secondary font-weight-bold text-xs\">Enter</a>";
      temp_html = "<td>" + 
        "<div class=\"align-middle text-center text-sm\">" +
        buttontext+
      "</div>" +
        "</td>";

    }

    new_cell.innerHTML = temp_html;
  }
}

  function LabAdd() {
    getTable(true,"","","","");
  }

  function creationLab() {
    var name = document.getElementById("new_name").value; // 9 digits
    var startDate = document.getElementById("new_startdate").value;
    var endDate = document.getElementById("new_enddate").value;
    var course = document.getElementById("new_course").value;

    var params = {
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
      Class_Search();
    });
  }

  function validation() {

  }