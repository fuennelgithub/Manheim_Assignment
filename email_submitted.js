


// Function that submits form and display a message to customer.
function send_email() {

var email = document.getElementById("email").value;

document.getElementById("form_id").submit(); //submit form
window.alert(" Thanks! we will keep you updated of new releases to this email address:" + email);

}