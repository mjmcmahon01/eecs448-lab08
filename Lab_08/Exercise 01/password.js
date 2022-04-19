function func() {
    var password = document.getElementById("pw_1").value;
    var validate = document.getElementById("pw_2").value;

    if(password != validate && password.length < 8 && validate.length < 8) {
        window.alert("Error: Passwords do not match\nError: Passwords are not at least 8 characters long");
    }
    else if(password != validate) {
        window.alert("Error: Passwords do not match");
    }
    else if(password.length < 8 || validate.length < 8) {
        window.alert("Error: Passwords are not at least 8 characters long");
    }
    else {
        window.alert("Password valid");
    }
}
