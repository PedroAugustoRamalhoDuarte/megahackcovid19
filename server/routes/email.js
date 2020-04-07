const express = require("express");
const router = express.Router();

const Email = require('../models/Email');


router.post("/createEmail", (req, res) => {

    const newEmail = new Email(
        {
            to: req.body.to,
            from: req.body.from,
            subject: req.body.subject,
            text: req.body.text
        }
    );

    newEmail
        .save()
        .then(email => res.json(email))
        .catch(err => console.log(err));

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    sgMail
        .send(newEmail)
        .then(() => { }, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
})

module.exports = router