document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simple simulation
    if(username && password){
        localStorage.setItem("username", username);
        alert("Login successful!");
        window.location.href = "dashboard.html";
    } else {
        alert("Enter username and password");
    }
});
