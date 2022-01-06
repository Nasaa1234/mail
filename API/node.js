const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const nodemailer = require('nodemailer')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post("/send", async (req, res) => {
    
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "nasaanasaa.070122@gmail.com",
            pass: "NasaaNasaa0122",
        },
    });

    var mailOptions = {
        from: "nasaanasaa.070122@gmail.com",
        to: "@munkhsaramdulmaa0@gmail.com",
        subject: "Nasaa bna",
        text: "Hello, Dear people",
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