
var formData = {name:"ravi",age:"31"}; //Array 

$.ajax({
    url : "AJAX_POST_URL",
    type: "POST",
    data : formData,
    success: function(data, textStatus, jqXHR)
    {
        //data - response from server
    },
    error: function (jqXHR, textStatus, errorThrown)
    {

    }
});