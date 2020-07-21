$(document).ready(function () {
    var user, to, subject, text;
    $("#send_email").click(function () {
        // enter your email account that you want to recieve emails at.
        to = "hello@sethbergman.com";
        name = $("#name").val();
        user = $("#user_email").val();
        text = $("#textarea1").val();
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
});
