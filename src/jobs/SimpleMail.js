const Mail = require('../lib/Mail');

class SimpleMail {
  get key() {
    return 'SimpleMail';
  }

  async handle({ data }) {
    const { name, email, githubLink } = data;

    await Mail.sendMail({
      from: '"Fred Foo" <foo@example.com>',
      to: 'bar@example.com, baz@example.com',
      subject: 'A mail with nodemailer and handlebars',
      template: 'sample',
      context: {
        name,
        email,
        githubLink
      }
    });
  }
}

module.exports = new SimpleMail();
