/* Validate the login credentials */
function validateUser() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username=="sulaimanbakali@gmail.com" && password=="root") {
        alert("Login Successful!");
        window.open("admin.html");
    }
    else {
        alert("Login Unsuccessful!");
    }
}