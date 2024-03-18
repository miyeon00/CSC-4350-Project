const common_url = "http://ec2-18-221-233-120.us-east-2.compute.amazonaws.com";

function setCookie(name, value, exp) {
    var date = new Date(); date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

function getCookie (name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
};
