const router = require("express").Router();
const tasksController = require("../controllers/tasksController");

router.get("/", tasksController.getAllTasks);
router.get("/:id", tasksController.getTaskById);

router.post("/", tasksController.createTask);

module.exports = router;
