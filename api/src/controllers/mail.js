const nodemailer = require('nodemailer')
const { user, pass, host } = require('./env')


const _user = user


async function sendMail(req, res) {

  const { to, subject, text, html } = req.body

  let transporter = nodemailer.createTransport({
    host: host,
    port: 587,
    secure: false,
    auth: {
      user: _user,
      pass: pass
    },
  })

  try {
    let info = await transporter.sendMail({
      from: `"Wave Music" <${user}>`,
      to,
      subject,
      text,
      html: '<img src="https://res.cloudinary.com/dbu76tbs6/image/upload/v1635314355/samples/ecommerce/thankyousmall_zt76ka.png" alt="thanks!" />',
    })

    console.log("Message sent: %s", info.messageId)

    res.json({message: "Susccess"})
  } catch (err) {
    console.error(err)
    res.json({message: "Fail"})
  }
}

const sendOrder = async (req, res) => {

  const { user, items, quantity, totalPrice, status } = req.body

  const to = user
  const subject = 'Thank you for buying on Wave Music!'
  const text = `Items: ${quantity}, Total: ${totalPrice}, Status: ${status}`
  const html = `<div style="color:black">
    <h1 style='background-color:orange;font-weight:normal;padding:20px;color:white'>
      Thank you for choosing Wave Music
    </h1>
    <table style="text-align:left;padding:10px;min-width:80%">
      <tr>
        <th style="text-align:left">Item</th><th>Brand</th><th>Quantity</th><th>Price</th>
      </tr>
    ${items.map(item => {
      return (
        `<tr style="color:grey">
          <td>${item.name}</td>
          <td>${item.brand}</td>
          <td>${item.qty}</td>
          <td>${item.price}</td>
        </tr>`)
    }).join(' ')}
    </table>
    <p><strong>Total: </strong> ${totalPrice}</p>
    <hr />
    <p><strong>Status: </strong> ${status}</p>
    <hr />
    <small>Wave Music is powered by Henry Students.</small></div>`

  let transporter = nodemailer.createTransport({
    host: host,
    port: 587,
    secure: false,
    auth: {
      user: _user,
      pass: pass
    },
  })

  try {
    let info = await transporter.sendMail({
      from: `"Wave Music" <${user}>`,
      to,
      subject,
      text,
      html,
    })

    console.log("Order confirmation: %s", info.messageId)

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
  sendOrder,
}
