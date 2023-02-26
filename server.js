const express = require('express');
const bodyParser = require('body-parser');
const pino = required('express-pino-logger');
const client = require('twilio')(
    process.env.ACCOUNT_SID,
    process.env.AUTH_TOKEN,
)
const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(pino);

app.post('/api/messages', (req,res) => {
    res.header('Content-Type', 'application/json');
    client.messages
        .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.to,
        body: req.body.body
        })
        .then(() => {
        res.send(JSON.stringify({ success: true }));
        })
        .catch(err => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
        });
});