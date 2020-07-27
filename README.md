# :mailbox: Mail queue

**A simple example of send mails with [bee queue](https://github.com/bee-queue/bee-queue), [nodemailer](https://nodemailer.com/about/) and [handlebars](https://handlebarsjs.com/)**

## :pushpin: Requirements

- NodeJS (12.17.0)
- Docker and Docker Compose
- Yarn (optional)

---

## :computer: How to run

- Install dependecies:

```javascript
  yarn // or npm i
```

- Run redis container:

```shell
  docker-compose up -d
```

- Create a `.env` just like `.env.example` and fill the empty variables.

- Run project

```javascript
  yarn dev // or npm run dev
```

- Run queue

```javascript
  yarn queue // or npm run queue
```

### :memo: License
MIT License: [LICENSE](https://github.com/gaoliveira21/mail-queue/blob/master/LICENSE.md) for more information.

---

:construction_worker: Built by **Gabriel Oliveira** :smiley: - **Contato:** <a href="https://www.linkedin.com/in/gabriel-jos%C3%A9-de-oliveira-633962197/">Linkedin</a>
