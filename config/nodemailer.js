const nodemailer = require("nodemailer");

exports.sendmail=async ()=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        host: "smtp.gmail.com",
        port:465,
        auth: {
          user: "",
          pass: "",
        },
      });
      
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"kartik ltd limited 👻" <mkartikkp079@gmail.com>', // sender address
          to:req.body.email,
          subject: "your account has been logedin ✔", // Subject line
        
          html: "<b>security purpose mail secure your account</b>", // html body
        });
      
      transporter.sendmail(info,(err,info)=>{
        if(err)return resizeBy.send(err.message)
        else console.log("mail send");
    return resizeBy.send("user registerd")
      })
    }