const router = require("express").Router();
const tasksController = require("../controllers/tasksController");

router.get("/", tasksController.getAllTasks);
router.get("/:id", tasksController.getTaskById);

module.exports = router;
