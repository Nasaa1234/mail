const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const nodemailer = require('nodemailer')

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post("/send", async (req, res) => {
    console.log(req.body)
    const { mail, text , header} = req.body
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "nasaanasaa.070122@gmail.com",
            pass: "NasaaNasaa0122",
        },
    });

    var mailOptions = {
        from: "nasaanasaa.070122@gmail.com",
        to: mail,
        subject: header,
        text: text,
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });

    res.send("sent gmail");
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})