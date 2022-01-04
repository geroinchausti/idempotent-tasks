const loremFakerService = require("../service/loremFaker");
const uuid = require("uuid");
const {
  getTasks,
  inserManyTasks,
  updateTask,
} = require("../service/tasksService");


exports.fetchTasks = async (req, res) => {
  try {
    const { quantity = 3 } = req.query;
    const qty = parseInt(quantity, 10);

    if(quantity >= 10000) {
      return res.status(406).send("You should request a quantity of tasks lower than 10.000");
    }

    const storedTask = await getTasks(qty,  { completed: { $lte: false } });

    if (storedTask.length < qty) {
      const amountOfNewTasks = qty - storedTask.length;
      const data = await loremFakerService.get(amountOfNewTasks);
      const newTasks = data.map((title) => ({
        title,
        _id: uuid.v4(),
        completed: false,
      }));
      sendResponse(res, [...storedTask, ...newTasks]);

      return await inserManyTasks(newTasks);
    }

    if (storedTask.length === qty) {
      return sendResponse(res, storedTask);
    }

  } catch (e) {
    return res.status(500).send("Internal Server error");
  }
};

const sendResponse = (res, data) => {
    return res.status(200).json({
      data,
    });
}


exports.updateTask = async (req, res) => {
  try {
    const { task } = req.body;

    if (!task) {
      return res.status(400).send("Task is required");
    }
  
     await updateTask(task);
  
     return res.status(200).send("Task updated sucessfully");

  } catch(e) {
    return res.status(500).send("Internal Server error");
  }
}
