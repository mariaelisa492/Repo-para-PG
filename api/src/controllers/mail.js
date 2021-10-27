const nodemailer = require('nodemailer')
const { user, pass, host } = require('./env')


async function sendMail(req, res) {

  const { to, subject, text, html } = req.body

  let transporter = nodemailer.createTransport({
    host: host,
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass
    },
  })

  try {
    let info = await transporter.sendMail({
      from: '"Wave Music" <wavemusicnotify@gmail.com>',
      to,
      subject,
      text,
      html,
    })

    console.log("Message sent: %s", info.messageId)

    res.json({message: "Susccess"})
  } catch (err) {
    console.error(err)
    res.json({message: "Fail"})
  }
}


const sendNewsletter = async (req, res) => {}

const sendPromo = async (req, res) => {}


module.exports = {
  sendMail,
  sendNewsletter,
  sendPromo,
}
