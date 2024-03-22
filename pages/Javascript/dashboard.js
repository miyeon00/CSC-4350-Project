var labnames=[];

$(document).ready(function(){
    var username;
    //username = getCookie("username");
    console.log(username);
    getInfos(username);
});  

async function getInfos(username){
    await getUserInfo(username);
    await getLabInfo();
}

function getUserInfo(username){
    var user_filter_url = common_url+"/users/filter";  

    var params ={
        username: username
    };

    return new Promise(resolve=>{
        fetch(user_filter_url)
        .then((response)=>{
            return response.json();
        })
        .then(data => {
        let users = data;
        users.map(function(user) {
            let pantherId = user.pantherId;
            let firstName = user.firstName;
            let role = user.role;
            let lab = user.lab;
            setCookie("firstName",firstName,1);
            setCookie("pantherId",pantherId,1);
            setCookie("role",role,1);
            setCookie("lab",lab,1);
            resolve();
        });
    });
    })    
}

function getLabInfo(){
    var lab_filter_url = common_url+"/labs/filter";  

    return new Promise(resolve=>{
        fetch(lab_filter_url)
        .then((response)=>{
            return response.json();
        })
        .then(data => {
            console.log(data);
            resolve();
    });
    })    
}

function createTable(){

    
}
