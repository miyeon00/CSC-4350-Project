function Class_Search()
{
  var startDate  = document.getElementById("startdate").value; //1/1/2024
  var endDate = document.getElementById("enddate").value;//1/1/2024

  var coursemane = document.getElementById("coursemane").value;

  var params = {
    startDate: {start:startDate,end:endDate}
  }

  var lab_all_url = common_url + "labs";
    
  fetch(lab_all_url)
  .then(response => {
    //handle response            
    console.log(response);
  })
  .then(data => {
    //handle data
    console.log(data);
  })
  .catch(error => {
    //handle error
  });

}

function getTable(){
    if(count ==0){
        "There is no labs. Will u make lab?"
    }

    if(count !=0){
        //build a table
    }

}