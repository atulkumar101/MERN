export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function setCookie(name,value,day) {
    var date = new Date();
    date.setTime(date.getTime() + (day*24*60*60*1000));
    var expires = "expires=" + date.toUTCString();
    const cookie = name + "=" + value + ";" + expires + ";" + "HttpOnly" ;
    console.log(cookie);
    document.cookie = cookie;
}

/**
 * 
if (document.cookie.split(';').filter((item) => item.includes('reader=')).length) {
    console.log('The cookie "reader" exists')
}
 */
export function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

export function deleteCookie() {

}