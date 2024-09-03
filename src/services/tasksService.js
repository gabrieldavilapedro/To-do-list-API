const { Tasks } = require("../models");

const getAllTasks = async () => {
  const tasks = await Tasks.findAll();
  return { message: 200, data: tasks };
};

const getTaskById = async (id) => {
  const task = await Tasks.findByPk(id);
  if (!task) return { message: 404, data: { message: "Task not found" } };

  return { message: 200, data: task };
};

const createTask = async (title, description) => {
  const task = await Tasks.create({ title, description });
  if (title.length < 5)
    return {
      message: 400,
      data: { message: "the title must have more than 5 characters" },
    };
  if (title.length > 30)
    return {
      message: 400,
      data: { message: "the title must have less than 30 characters" },
    };
  if (description.length < 5)
    return {
      message: 400,
      data: { message: "the description must be longer than 5 characters" },
    };

  return { message: 201, data: task };
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
};
