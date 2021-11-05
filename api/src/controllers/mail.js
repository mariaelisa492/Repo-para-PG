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

  let title, img;
  if (status.toLowerCase() === 'processing') {
    title = 'Thanks for choosing WaveMusic!'
    img = 'https://res.cloudinary.com/dbu76tbs6/image/upload/v1636058319/package_qrk1tm.png'
  } else {
    title = 'Your order is on the way!'
    img = 'https://res.cloudinary.com/dbu76tbs6/image/upload/v1636061218/icon-delivery_tamycf.png'
  }
  const to = user
  const subject = 'Thank you for buying on Wave Music!'
  const text = `Items: ${quantity}, Total: ${totalPrice}, Status: ${status}`
  const html = `<div style="color:black;text-align:center">
    <div style='background-color:orange;background-image:linear-gradient(to left, #fdaa48, #f2ab15);font-weight:normal;padding:20px;color:black;text-align:center'>
      <img src='https://res.cloudinary.com/dbu76tbs6/image/upload/v1636057840/waveMusic_zynjer.png' alt='Wave Music' />
    </div>
    <h1 style='color:#6f6f6f'>${title}</h1>
    <img style='margin:20px;width:30%' src=${img} alt='' />
    <h2>Your order:</h2>
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
    <tr style="color:black">
      <td>-</td>
      <td>-</td>
      <td>Total:</td>
      <td>${totalPrice}</td>
    </tr>
    </table>
    <p style='padding:10px;margin:10px;text-align:left;border-top:1px solid orange'>
      <strong>Status: </strong> ${status}
    </p>
    <p style='padding:10px;margin:0px 10px;background:#eeeeee;color:#6f6f6f'>
      <small>Wave Music is powered by Henry Students.</small></div>
    </p>`

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
