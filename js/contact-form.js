
// CONTACT FORM //

http://www.prowaretech.com/Computer/JavaScript/NodejsContactForm

function submitEmailForm(form) {
    const obj = new XMLHttpRequest();
    obj.onreadystatechange = function(){
        if(obj.readyState == 4){
            if(obj.status == 200){
                var res = JSON.parse(obj.responseText);
                alert(res.message);
            }
            else{
                alert("XMLHttp status " + obj.status + ": " + obj.statusText);
            }
        }
    };
    obj.open("post", form.action, true);
    obj.setRequestHeader("Content-Type", "application/json"); // NOTICE: "application/json"
    obj.send(JSON.stringify({ name: form.name.value, email: form.email.value, message: form.message.value }));
    return false;
}