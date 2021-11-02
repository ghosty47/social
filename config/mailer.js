require('dotenv').config()

const { createTransport } = require('nodemailer')

const transport = createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
})



function sendEmail(from, to, subject, html) {
    return new Promise((resolve, reject) => {
        transport.sendMail({from, to, subject, html}, (err, info) => {
            if(err) return reject(err);

            resolve(info)
        })
    })
}

module.exports = sendEmail


// module.exports = {
//     GMAIL_USER: process.env.GMAIL_USER,
//     GMAIL_PASS: process.env.GMAIL_PASS
// }