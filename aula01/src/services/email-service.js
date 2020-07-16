const config = require('../config')
const sendgrid = require('sendgrid')[config.sendgridKey]

exports.send = (to, subject, body) => {

    sendgrid.send({
        to: to,
        from: 'hello@flavioamorim.net.br',
        subject: subject,
        html: body
    })
}