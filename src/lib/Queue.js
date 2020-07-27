const Bee = require('bee-queue');
const redisConfig = require('../config/redis');

const SimpleMail = require('../jobs/SimpleMail');

const jobs = [SimpleMail];

class Queue {
  constructor() {
    this.queue = {};

    this.init();
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queue[key] = {
        bee: new Bee(key, {
          redis: redisConfig
        }),
        handle,
      }
    });
  }

  addJob(queue, job) {
    this.queue[queue].bee.createJob(job).save();
  }

  processQueue() {
    jobs.forEach(({ key }) => {
      const { bee, handle } = this.queue[key];

      bee.on('failed', this.handleFailure).process(handle);
    });

  }

  handleFailure(job, err) {
    console.log(`Queue ${job.queue.name} FAILED`, err);
  }
}

module.exports = new Queue();
