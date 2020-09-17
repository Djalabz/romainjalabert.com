
// CONTACT FORM //

http://www.prowaretech.com/Computer/JavaScript/NodejsContactForm

function submitEmailForm(form) {
    console.log('function working');
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                var res = JSON.parse(xhr.responseText);
                alert(res.message);
            }
            else{
                alert("XMLHttp status " + xhr.status + ": " + xhr.statusText);
            }
        }
    };
    xhr.open("post", form.action, true);
    xhr.setRequestHeader("Content-Type", "application/json"); // NOTICE: "application/json"
    xhr.send(JSON.stringify({ firstname: form.firstname.value, lastname: form.lastname.value, email: form.email.value, message: form.message.value }));
    return false;
}