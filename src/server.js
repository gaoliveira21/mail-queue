const express = require('express');
const Queue = require('./lib/Queue');
const SimpleMail = require('./jobs/SimpleMail');

const app = express();

app.use(express.json());

app.get('/', async (request, response) => {
  Queue.addJob(SimpleMail.key, {
    name: 'Gabriel',
    email: 'ga@mail.com',
    githubLink: 'https://github.com/gaoliveira21'
  });
  return response.json();
});

app.listen(3333);
