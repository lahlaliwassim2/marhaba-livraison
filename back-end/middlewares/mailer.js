const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken')
require('dotenv').config()
const Storage = require('local-storage')
const main = (method,user)=> {

    const token = jwt.sign({email:user.email},process.env.SECRET_TOCKEN)
    let subject = ''
    let html = ''
    
    if(method=='register'){
        subject = 'Verifier email'
        html = `<div style='height: 150px; width: 100%;'>
        <h4>Hi Client</h4>
        <p>You are receiving this because you (or someone else) have requested the reset of the password for your account. <span style='font-weight: bold;'>MARHABA</span>,Please click on the following link, or paste this into your browser to complete the process:</p>
        <a href="http://localhost:${process.env.PORT}/api/auth/verify-email/${token}">Active</a> 
      </div>`
    }

    if(method=='forgetPassword'){
        subject = 'Forget password'
        html = `<div style='height: 150px; width: 100%;'>
        <h4>Hi Client</h4>
        <p>You are receiving this because you (or someone else) have requested the reset of the password for your account. <span style='font-weight: bold;'>MARHABA</span>,Please click on the following link, or paste this into your browser to complete the process:</p>
        <a href="http://localhost:${process.env.PORT}/api/auth/veriyfy-forget-password/${token}">Active</a> 
      </div>`
    }

    if(method=='Addlivreur'){
        subject = 'Forget password'
        html = `<div style='height: 150px; width: 100%;'>
        <h4>Hi Livreur , doz t5dam ha 7na gadina lik masa2il</h4>
        <h5>Your email :${user.email}</h5>
        <h5>Your password :${Storage('stockPassword')}</h5>
        <p>You are receiving this because you (or someone else) have requested the reset of the password for your account. <span style='font-weight: bold;'>MARHABA</span>,Please click on the following link, or paste this into your browser to complete the process:</p>
        <a href="http://localhost:${process.env.PORT}/api/auth/veriyfy-forget-password/${token}">Active</a> 
      </div>`
    }

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth:{
            user:'khadijach896@gmail.com',
            pass:process.env.MAILER,
        },
    })

    let info ={
        from: '"Marhaba ✨" <khadijach896@gmail.com>',
        to: user.email,
        subject: subject,
        html:html,
      };
      transporter.sendMail(info);
      console.log("Message sent");
}

module.exports={main}