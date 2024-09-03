const nodeMailer=require("nodemailer");
const dotenv=require("dotenv");
dotenv.config({path:"backend/config/config.env"})
const sendEmail=async(options)=>{
    const transporter=nodeMailer.createTransport({
        service:process.env.SMPT_SERVICE,
        host:"smtp.gmail.com",
        port:465,
        secure: true,
        auth:{
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_PASSWORD,
        },
    });

    const mailOptions={
        from:process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message,

    };

    await transporter.sendMail(mailOptions);
};

module.exports=sendEmail;