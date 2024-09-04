const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const { Tasks } = require('../../src/models');

chai.use(chaiHttp);
const { expect } = chai;

before(async () => {
  await Tasks.create({
    title: 'Estudar Node.js',
    description: 'Estudar Node.js para desenvolver APIs',
  });
});

after(async () => {
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
});

