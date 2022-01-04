const TasksController = require("../controller/tasksController");
const express = require("express");
const router = express.Router();



router.get("/", TasksController.fetchTasks);

router.put("/", TasksController.updateTask);



module.exports = router;
