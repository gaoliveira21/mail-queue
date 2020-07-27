const nodemailer = require('nodemailer');
const expressHbs = require('express-handlebars');
const nodemailerExpressHbs = require('nodemailer-express-handlebars');
const mailConfig = require('../config/mail');
const { resolver, resolve } = require('path');

class Mail {
  constructor() {
    this.transporter;

    this.init();
  }

  init() {
    this.transporter = nodemailer.createTransport({
      secure: false,
      ...mailConfig
    })

    this.configureTemplates();
  }

  configureTemplates() {
    const viewPath = resolve(__dirname, '..', 'views', 'mail')

    this.transporter.use(
      'compile',
      nodemailerExpressHbs({
        viewEngine: expressHbs.create({
          layoutsDir: resolve(viewPath, 'layouts'),
          partialsDir: resolve(viewPath, 'partials'),
          defaultLayout: 'default',
          extname: '.hbs'
        }),
        viewPath,
        extName: '.hbs'
      })
    )
  }

  sendMail(options) {
    return this.transporter.sendMail(options);
  }
}

module.exports = new Mail();
