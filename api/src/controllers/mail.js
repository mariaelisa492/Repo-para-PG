const nodemailer = require('nodemailer')
const process = require('process')
require('dotenv').config()


const { user, pass } = process.env


const sendMail = async (req, res) => {

  const { to, subject, text, html } = req.body

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user,
      pass
    },
  })

  let info = await transporter.sendMail({
    from: '"Wave Music" <wavemusicnotify@gmail.com>',
    to,
    subject,
    text,
    html,
  })

  console.log("Message sent: %s", info.messageId)

}


const sendNewsletter = async (req, res) => {}

const sendPromo = async (req, res) => {}


module.exports = {
  sendMail,
  sendNewsletter,
  sendPromo,
}
