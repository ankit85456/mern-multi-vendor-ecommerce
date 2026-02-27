const nodemailer = require("nodemailer");

const sendMail = async (options) => {
  const smtpHost = process.env.SMPT_HOST || process.env.SMTP_HOST;
  const smtpPort = process.env.SMPT_PORT || process.env.SMTP_PORT;
  const smtpService = process.env.SMPT_SERVICE || process.env.SMTP_SERVICE;
  const smtpUser = process.env.SMPT_USER || process.env.SMTP_USER || process.env.SMPT_MAIL || process.env.SMTP_MAIL;
  const smtpPassword = process.env.SMPT_PASSWORD || process.env.SMTP_PASSWORD;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    service: smtpService,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: smtpUser,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
