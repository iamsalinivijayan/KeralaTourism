function viewLogin() {
    window.location.href = "login.html";
  }

    function validateForm() {
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("emailError").innerHTML = "Invalid email address";
        } else {
            document.getElementById("emailError").innerHTML = "";
        }

        // Phone Number Validation
        const phoneRegex = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
        if (!phoneRegex.test(phone)) {
            document.getElementById("phoneError").innerHTML = "Invalid phone number";
        } else {
            document.getElementById("phoneError").innerHTML = "";
        }

        // Password Validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
        } else {
            document.getElementById("passwordError").innerHTML = "";
        }

        // Password Strength Indicator
        const passwordStrength = calculatePasswordStrength(password);
        if (passwordStrength === "strong") {
            document.getElementById("passwordError").className = "success";
            document.getElementById("passwordError").innerHTML = "Strong password";
        } else if (passwordStrength === "medium") {
            document.getElementById("passwordError").className = "warning";
            document.getElementById("passwordError").innerHTML = "Medium strength password";
        } else if (passwordStrength === "weak") {
            document.getElementById("passwordError").className = "error";
            document.getElementById("passwordError").innerHTML = "Weak password";
        }
    }

    function calculatePasswordStrength(password) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
      
        if (password.length >=8 && hasUpperCase && hasLowerCase && hasNumber) {
          return 'strong';
        } else if (password.length >= 8 && (hasUpperCase || hasLowerCase || hasNumber)) {
          return 'medium';
        } else if (password.length <= 8 || hasLowerCase==null || hasLowerCase == null || hasNumber == null ){
          return 'weak';
        }
      }

      document.getElementById('signupForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if (document.getElementById("passwordError").innerHTML == "Strong password") {
            alert('Successfully logged in')
            return 'strong';
        }
    });

    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        if (document.getElementById("passwordError").innerHTML == "Strong password") {
            alert('Successfully logged in')
        }
    });


