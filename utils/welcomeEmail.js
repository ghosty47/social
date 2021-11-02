const sendEmail = require('../config/mailer')

const welcomeEmail = async (req,username, email, secretToken) => {
    const html = `
        Welcome to WAAWChat, ${username}, we're excited to have you join us.
        <br/>
        <br/>
        You can copy and paste the following code <strong>${secretToken}</strong> in the confirmation page
        or click on the link below to activate your account.
        <br/>
        <br/>

        Confirmation Link: ${req.headers.host}/user/confirm-account/${secretToken}
        <br/>
        <br/>

        WAAWChat will give you the best experience ever!!!!!!!
        <br/>
        <br/>
        Cheers,
        <br/>
        <strong>WAAWCHAT Team</strong>
    `

    await sendEmail(
        'support@waawchat.com',
        email,
        'Welcome to WAAWChat',
        html
    )
}

module.exports = welcomeEmail


//if you want to push your website to the web, use req.headers.origin