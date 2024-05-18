const nodemailer=require("nodemailer");
async function sendMail(){
  const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:"gauravpande2002@gmail.com"
    }
  })
}