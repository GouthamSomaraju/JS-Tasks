// validation of DOB
function validateDOB() {
    let dob=document.getElementById("dob").value
    let dobPattern=/\d{2}-\d{2}-\d{4}/
    let dobError=document.getElementById("dobError")

    if(!dobPattern.test(dob)){
        dobError.innerText="Invalid DOB format."
        dobError.style.color="red"
    }else{
        dobError.innerText=""
    }
}
// validation for Mobile
function validateMobile() {
    let mobile=document.getElementById("mobile").value
    let mobilePattern=/^[6-9]\d{9}$/
    let mobileError=document.getElementById("mobileError")
    
    if (!mobilePattern.test(mobile)) {
        mobileError.innerText="Invalid Mobile Number"
        mobileError.style.color="red"
    }else{
        mobileError.innerText=""
    }
}
// validation of Email
function validateEmail() {
    let email=document.getElementById("email").value
    let emailPattern=/[\w._]+@[a-z]+\.[a-z]{2,3}/
    let emailError=document.getElementById("emailError")
    if (!emailPattern.test(email)) {
        emailError.innerText="Invalid Email address format"
        emailError.style.color="red"
    }else{
        emailError.innerText=""
    }
    
}
// validation of password
function validatePassword() {
    let password=document.getElementById("password").value
    let passwordPattern=/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}/
    let passwordError=document.getElementById("passwordError")
        
    if (!passwordPattern.test(password)) {
        passwordError.innerText="Password must contain A-Z,a-z,0-9,!@#$%^&* with atleast 8 characters"
        passwordError.style.color="red"
    }else{
        passwordError.innerText=""
    }
}
