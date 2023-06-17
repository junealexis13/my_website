// Adding event listener to clicks to change the page
document.getElementById("link-research").addEventListener("click", function() {window.location.href = "./researches.html"});
document.getElementById("link-home").addEventListener("click", function() {window.location.href = "./index.html"});
document.getElementById("link-contact").addEventListener("click", function() {window.location.href = "./contact.html"});
document.getElementById("link-about").addEventListener("click", function() {window.location.href = "./about_me.html"});

// Init Email Services
(function(){
    emailjs.init("ztuVL7488eB1C1pIB");
 })();

// Create a send function

function sendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_hcsgifn","template_htojt6i",params).then(function (res) { alert("Sent successfully! Thank you for reaching out. I'll get back to you as soon as possible. =)")});

}

