const router = require("express").Router();
const tasksController = require("../controllers/tasksController");

router.get("/", tasksController.getAllTasks);

module.exports = router;
