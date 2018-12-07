import nodemailer from "nodemailer";
import schedule from "node-schedule";
import dotenv from 'dotenv';
dotenv.config(); //({path:''})
import * as config from '../config'; 


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {

      user: config.GMAIL_ID,

      pass: process.env.GMAIL_PASS || ''
    }
});
  
const mailOptions = {
    from: 'Sarvesh Singh',
    to: 'sarvesh.singh@daffodilsw.com , sarvesh.singh18@hotmail.com',
    subject: 'Checkout Test',
    //text: 'That was easy!'
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};


//let date = new Date(2018, 9, 3, 17, 0, 0);

const task = schedule.scheduleJob(date, function(){
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email Sent: ' + info.response);
    }
    });
});
