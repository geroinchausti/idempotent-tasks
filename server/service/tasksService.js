const { DataBaseClient } = require("../config/db");


const cl = "tasks";

exports.getTasks = (qty, query) => {
  try {
      return DataBaseClient.db
      .collection(cl)
      .find(query)
      .limit(qty)
      .toArray();
  } catch(e){
    throw e;
  }
};

exports.inserManyTasks = (tasks) => {
  try {
    return DataBaseClient.db
    .collection(cl)
    .insertMany(tasks);
  } catch(e){
    throw e;
  }
};

exports.findTaskById = (id) => {
  try {
    return DataBaseClient.db
    .collection(cl)
    .filer({ _id: id });
  } catch(e){
    throw e;
  }
};

exports.updateTask = (task) => {
  try {
    return DataBaseClient.db
    .collection(cl)
    .updateOne({ _id: task._id }, { $set: task });
  } catch(e){
    throw e;
  }
};


