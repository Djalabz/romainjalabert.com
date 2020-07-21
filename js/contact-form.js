
// CONTACT FORM //



document.getElementById('submit').addEventListener('click', function () {
    var user, to, subject, text;
        // enter your email account that you want to recieve emails at.
        to = "romainjalabet.pro@gmail.com";
        fname = $("#fname").val();
        lname = $("#lname").val();
        user = $("#user_email").val();
        text = $("#message").val();
        // $("#message").text("Sending E-mail...Please wait");
        $.get("http://localhost:8080/send", {
            to: to,
            name: name,
            user: user,
            text: text
        }, function (data) {
            if (data == "sent") {
                console.log("Email sent");
            }
        });
    });
;
