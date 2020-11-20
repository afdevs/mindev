const express =require('express');
const cors = require('cors');
const nodemailer= require('nodemailer');
const configMail=require('./constant');

const app=express();

app.use(cors());
app.use(express.json());

const port=5000;

//Nodemailer configuration
const transporter= nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '586',
    service: configMail.service,
    auth:{
        user: configMail.email,
        pass: configMail.password
    }
});


app.post("/sendmail", (req, res)=>{
    const {name, email, phoneNumber, description}=req.body;
    let mailOptions={
        from: configMail.email,
        to: 'andrianaivofredo@gmail.com',
        subject: `Mindev.tech | ${name}`,
        text: `
        De la part de : ${name}

        Email: ${email}

        Tél: ${phoneNumber}

        Message:
        ${description}
        `
    };

    transporter.sendMail(mailOptions, (err, succ)=>{
        if(err){
            res.status('404').json(`Un Erreur est survenu lors de l'envoie du message ${err}`);
        }else{
            res.json('sent');
        }
    });

});

app.listen(port, ()=>{
    console.log(`running on port ${port}`);
});