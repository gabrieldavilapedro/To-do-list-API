const { Tasks } = require('../models');

const getAllTasks = async () => {
  const tasks = await Tasks.findAll();
  return { message: 200, data: tasks };
};

const getTaskById = async (id) => {
  const task = await Tasks.findByPk(id);
  if (!task) return { message: 404, data: { message: 'Task not found' } };

  return { message: 200, data: task };
};

const createTask = async (title, description) => {
  const task = await Tasks.create({ title, description });
  if (title.length <= 1)
    return {
      message: 400,
      data: { message: 'the title must have more than 1 characters' },
    };
  if (title.length > 30)
    return {
      message: 400,
      data: { message: 'the title must have less than 30 characters' },
    };
  if (description.length <= 1)
    return {
      message: 400,
      data: { message: 'the description must have more than 1 characters' },
    };

  return { message: 201, data: task };
};

const updateTask = async (id, attributes) => {
  const { title, description, check } = attributes;

  const task = await Tasks.findByPk(id);
  const updateAtributes = {};

  if (title && title.length <= 1)
    return {
      message: 400,
      data: { message: 'the title must have more than 1 characters' },
    };
  if (title && title.length > 30)
    return {
      message: 400,
      data: { message: 'the title must have less than 30 characters' },
    };
  if (description && description.length <= 1)
    return {
      message: 400,
      data: { message: 'the description must have more than 1 characters' },
    };

  if (!task) return { message: 404, data: { message: 'Task not found' } };

  if (title !== undefined) updateAtributes.title = title;
  if (description !== undefined) updateAtributes.description = description;
  if (check !== undefined) updateAtributes.check = check;
  await task.update(updateAtributes);
  return { message: 200, data: task };
};

const deleteTask = async (id) => {
  const task = await Tasks.findByPk(id);
  if (!task) return { message: 404, data: { message: 'Task not found' } };

  await task.destroy();
  return { message: 200, data: { message: 'Task deleted' } };
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
