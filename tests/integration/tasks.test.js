const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const { Tasks } = require('../../src/models');

chai.use(chaiHttp);
const { expect } = chai;

beforeEach(async () => {
  await Tasks.create({
    title: 'Estudar Node.js',
    description: 'Estudar Node.js para desenvolver APIs',
  });
});

afterEach(async () => {
  await Tasks.destroy({ where: {} });
});

const expectedData = {
  title: 'Estudar Node.js',
  description: 'Estudar Node.js para desenvolver APIs',
  check: false,
};

describe('GET /tasks', function () {
  it('returns a list of tasks', async () => {

    const response = await chai.request(app).get('/tasks');

    expect(response).to.have.status(200);
    expect(response.body).to.be.an('array');
    expect(response.body[0]).to.have.property('id').that.is.not.undefined.and.is
      .not.null;
    expect(response.body[0]).to.have.property('createdAt').that.is.not.undefined
      .and.is.not.null;
    expect(response.body[0]).to.have.property('updatedAt').that.is.not.undefined
      .and.is.not.null;
    expect(response.body[0]).to.include(expectedData);
  });
});

describe('GET /tasks/:id', function () {
  it('returns the data for the given id', async () => {
    const task = await Tasks.findOne({ where: { title: 'Estudar Node.js' } });

    const response = await chai.request(app).get(`/tasks/${task.id}`);

    expect(response).to.have.status(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('id').that.is.not.undefined.and.is.not.null;
    expect(response.body).to.have.property('createdAt').that.is.not.undefined.and.is.not.null;
    expect(response.body).to.have.property('updatedAt').that.is.not.undefined.and.is.not.null;
    expect(response.body).to.include({
      title: 'Estudar Node.js',
      description: 'Estudar Node.js para desenvolver APIs',
      check: false,
    });

  });

  it('returns 404 if the task does not exist', async () => {
    const response = await chai.request(app).get('/tasks/999');

    expect(response).to.have.status(404);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').that.is.equal('Task not found');
  });
});

describe('POST /tasks', function () {
  it('creates a new task', async () => {
    const newTask = {
      title: 'Estudar React',
      description: 'Estudar React para desenvolver páginas web',
    };

    const response = await chai.request(app).post('/tasks').send(newTask);

    expect(response).to.have.status(201);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('id').that.is.not.undefined.and.is.not.null;
    expect(response.body).to.have.property('createdAt').that.is.not.undefined.and.is.not.null;
    expect(response.body).to.have.property('updatedAt').that.is.not.undefined.and.is.not.null;
    expect(response.body).to.include(newTask);
  });
  it('returns 400 if the title is less than 5 characters', async () => {
    const newTask = {
      title: 'Node',
      description: 'Estudar Node.js para desenvolver APIs',
    };

    const response = await chai.request(app).post('/tasks').send(newTask);

    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').that.is.equal('the title must have more than 5 characters');
  });
  it('returns 400 if the title is more than 30 characters', async () => {
    const newTask = {
      title: 'Estudar Node.js para desenvolver APIs',
      description: 'Estudar Node.js para desenvolver APIs',
    };

    const response = await chai.request(app).post('/tasks').send(newTask);

    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').that.is.equal('the title must have less than 30 characters');
  });
  it('returns 400 if the description is less than 5 characters', async () => {
    const newTask = {
      title: 'Estudar Node.js',
      description: 'Node',
    };

    const response = await chai.request(app).post('/tasks').send(newTask);

    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').that.is.equal('the description must be longer than 5 characters');
  });
});

describe('PUT /tasks/:id', function () {
  it('updates a task check', async () => {
    const task = await Tasks.findOne({ where: { title: 'Estudar Node.js' } });

    const updatedTask = {
      check: true,
    };

    const response = await chai.request(app).put(`/tasks/${task.id}`).send(updatedTask);

    expect(response).to.have.status(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('id').that.is.not.undefined.and.is.not.null;
    expect(response.body).to.have.property('createdAt').that.is.not.undefined.and.is.not.null;
    expect(response.body).to.have.property('updatedAt').that.is.not.undefined.and.is.not.null;
    expect(response.body).to.include(updatedTask);
  });

  it('updates a title and description', async () => {
    const task = await Tasks.findOne({ where: { title: 'Estudar Node.js' } });

    const updatedTask = {
      title: 'Estudar Vue.js',
      description: 'Estudar Vue.js para desenvolver páginas web',
    };

    const response = await chai.request(app).put(`/tasks/${task.id}`).send(updatedTask);

    expect(response).to.have.status(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('id').that.is.not.undefined.and.is.not.null;
    expect(response.body).to.have.property('createdAt').that.is.not.undefined.and.is.not.null;
    expect(response.body).to.have.property('updatedAt').that.is.not.undefined.and.is.not.null;
    expect(response.body).to.include(updatedTask);
  });


  it('returns 404 if the task does not exist', async () => {
    const updatedTask = {
      check: true,
    };

    const response = await chai.request(app).put('/tasks/999').send(updatedTask);

    expect(response).to.have.status(404);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').that.is.equal('Task not found');
  });
});

describe('DELETE /tasks/:id', function () {
  it('deletes a task', async () => {
    const task = await Tasks.findOne({ where: { title: 'Estudar Node.js' } });

    const response = await chai.request(app).delete(`/tasks/${task.id}`);

    expect(response).to.have.status(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').that.is.equal('Task deleted');
    
    const taskDeleted = await Tasks.findByPk(task.id);
    expect(taskDeleted).to.be.null;
  });
  it ('returns 404 if the task does not exist', async () => {
    const response = await chai.request(app).delete('/tasks/999');

    expect(response).to.have.status(404);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message').that.is.equal('Task not found');
  });
});

