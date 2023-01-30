// This is also one of the outdated code for that
/*document.getElementById("login-button").addEventListener("click", function(event) {
    event.preventDefault();
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    alert("Thank you for logging in!\nYour email: " + email + "\nPassword: " + password);
});
*/

//new code thet has been updated and useful
document.getElementById("login-button").addEventListener("click", function(event) {
    event.preventDefault();
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    if (email === "" || password === "") {
        alert("Please fill in both email and password fields.");
    } else {
        alert("Thank you for logging in!\nYour email: " + email + "\nPassword: " + password);
    }
});