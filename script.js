let password = document.getElementById("password");
let strength = document.getElementById("strength");
let bar = document.getElementById("bar");
let suggestions = document.getElementById("suggestions");

password.addEventListener("input", function () {
    let val = password.value;
    let score = 0;
    let tips = [];

    // Length check
    if (val.length >= 8) {
        score++;
    } else {
        tips.push("Use at least 8 characters");
    }

    // Uppercase
    if (/[A-Z]/.test(val)) {
        score++;
    } else {
        tips.push("Add uppercase letter");
    }

    // Lowercase
    if (/[a-z]/.test(val)) {
        score++;
    } else {
        tips.push("Add lowercase letter");
    }

    // Numbers
    if (/[0-9]/.test(val)) {
        score++;
    } else {
        tips.push("Add numbers");
    }

    // Special characters
    if (/[^A-Za-z0-9]/.test(val)) {
        score++;
    } else {
        tips.push("Add special character");
    }

    // Strength result
    if (score <= 2) {
        strength.innerText = "Weak ❌";
        strength.style.color = "red";
        bar.style.width = "30%";
        bar.style.background = "red";
    } 
    else if (score == 3 || score == 4) {
        strength.innerText = "Medium ⚠️";
        strength.style.color = "orange";
        bar.style.width = "60%";
        bar.style.background = "orange";
    } 
    else {
        strength.innerText = "Strong ✅";
        strength.style.color = "green";
        bar.style.width = "100%";
        bar.style.background = "green";
    }

    // Show suggestions
    suggestions.innerHTML = tips.join("<br>");
});