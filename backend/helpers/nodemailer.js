var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
 service: 'gmail',
 secure: false,
 auth: {
        user: 'faizarabhi8@gmail.com',
        pass: 'envoxnhrprdnmarh'
    }
});


module.exports.sendConfirmationEmail = ( email, activationcode)=>{
    transporter
    .sendMail({
        from: 'faizarabhi8@gmail.com',
        to: email,
        subject: "Confirmation Email",
        html : `<h1>Email de Confirmation</h1>
                <h2>Bonjour</h2>
                <p>Pour activer votre compte veuillez cliquer sur le lien</p>
                <a href=http://localhost:80000/confirm/${activationcode}>Clicuer ici</a>`
    })
    .catch((err)=> console.log(err))
}


