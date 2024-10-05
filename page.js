document.addEventListener("DOMContentLoaded", () => {
  const buttonSave = document.getElementById("sendMessage");


  emailjs.init("w3DtEQpoBQCJep_v9");

  buttonSave.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const subject = document.querySelector('input[name="subject"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !subject || !message) {
      alert("All fields are required. Please fill in all fields.");
      return;
    }

    const templateParams = {
      subject: subject,
      message: message,
      nom: name,
      email: email,
    };

    console.log('send mail:', templateParams);

    emailjs.send('service_faha3q1', 'template_j30d735', templateParams)
      .then(function(response) {
        console.log('Success', response.status, response.text);
        alert("Message sent successfully");
      }, function(error) {
        console.log('Failed', error);
        alert("Failed to send message");
      });

    console.log("Message sent successfully", {
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
  });
});
