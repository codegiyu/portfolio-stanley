const nodemailer = require('nodemailer')
require('dotenv').config()

export default function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.zoho.com",
    auth: {
      user: "codegiyu@zohomail.com",
      pass: process.env.password,
    },
    secure: true,
  })
  const mailData = {
    from: "codegiyu@zohomail.com",
    to: "joycefred13@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err) {
      console.log(err)
      res.status(400).json(err)
    } else {
      console.log(info)
      res.status(200).json(info)
    }
  })
}
