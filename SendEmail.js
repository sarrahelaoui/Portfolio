const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, 
  secure: false, 
  auth: {
    user: "sarrahelaoui.12@gmail.com",
    pass: "shjwtdvlklqgfudq",
  },
  tls: {
    rejectUnauthorized: false
  }
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "rowdhajady@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<ui><b>Hello world?</b><ui>", // html body
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
