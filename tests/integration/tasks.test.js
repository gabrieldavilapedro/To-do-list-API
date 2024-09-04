const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');
const { Tasks } = require('../../src/models');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando Tasks', function () {
  before(async () => {
    await Tasks.create({
      title: 'Estudar Node.js',
      description: 'Estudar Node.js para desenvolver APIs',
    });
  });

  after(async () => {
    await Tasks.destroy({ where: {} });
  });

  it('Testando getAllTasks', async () => {
    const expectedData = {
      title: 'Estudar Node.js',
      description: 'Estudar Node.js para desenvolver APIs',
      check: false,
    };

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
