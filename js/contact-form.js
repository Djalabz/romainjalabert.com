
// CONTACT FORM //

$(document).ready(function () {
$('.submit-button').click(function (event) {
        event.preventDefault();
        
        var to = "romainjalabet.pro@gmail.com";
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var text = $("#message").val();
        var status = $('.statusForm');
        status.empty();

        if(email.length>5 && email.includes('@') && email.includes('.')) {
            status.append(<div>email valid</div>)
        } else {
            status.append(<div>email non-valid</div>)
        }

        if(subject.length>2)  {
            status.append(<div>subject valid</div>)
        } else {
            status.append(<div>subject non-valid</div>)
        }

        if(fname.length>2 && lname.length>2)  {
            status.append(<div>name valid</div>)
        } else {
            status.append(<div>name non-valid</div>)
        }

        if(text.length>2) {
            status.append(<div>message valid</div>)
        } else {
            status.append(<div>message non-valid</div>)
        }


        // $.get("http://localhost:8080/send", {
        //     to: to,
        //     fname: fname,
        //     lname: lname,
        //     email: email,
        //     text: text
        // }, function (data) {
        //     if (data == "sent") {
        //         console.log("Email sent");
        //     }
        // });
    })
})
