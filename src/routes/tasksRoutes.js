const router = require("express").Router();
const tasksController = require("../controllers/tasksController");

router.get("/", tasksController.getAllTasks);
router.get("/:id", tasksController.getTaskById);

router.post("/", tasksController.createTask);

router.put("/:id", tasksController.updateTask);



module.exports = router;
