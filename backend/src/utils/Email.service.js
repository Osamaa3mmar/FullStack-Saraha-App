import nodemailer from "nodemailer";

export const sendEmail=async (to,subject, html)=>{


const transporter = nodemailer.createTransport({
 service: 'gmail',
  auth: {
    user: "osama1111222@gmail.com",
    pass: "dmfx jkvr sqal thyt",
  },
});


const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <osama1111222@gmail.com>', 
    to,
    subject, 
    html 
  });

}
