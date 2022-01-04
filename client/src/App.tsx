import React, { useEffect, useState } from "react";
import ITask from "./common/interfaces/task.interface";
import Button from "./components/Button";

import Header from "./components/Header";
import Input from "./components/Input";
import Loader from "./components/Loader";
import SubHeader from "./components/SubHeader";
import Task from "./components/Task";
import TaskList from "./components/TaskList";

import tasksService from "./services/tasks.service";

const App = () => {
  const [quantityOfTask, setQuantityOfTask] = useState<number>(3);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    setIsLoading(true);
    const response = await tasksService.get(quantityOfTask);
    setIsLoading(false);
    if (response) {
      setTasks(response.data);
    }
  };

  const filterTaskList = (task:ITask) => {
    setIsLoading(true);
    const newTaskList = tasks.filter((t: ITask) => t._id !== task._id);
    setTasks(newTaskList);
    setIsLoading(false);
  }

  return (
    <>
      <Header title="Tasks App" />
      <SubHeader>
        <Input
          value={quantityOfTask}
          type="number"
          onChange={(event) => setQuantityOfTask(Number(event.target.value))}
        />
        <Button type="raised" onClick={getTasks}>FETCH TASKS</Button>
      </SubHeader>
      <TaskList>
        {isLoading ? (
          <Loader/>
        ) : (
          tasks.map((task: ITask) => {
            return <Task key={task._id} task={task} onComplete={(task:ITask) => filterTaskList(task)}></Task>;
          })
        )}
      </TaskList>
    </>
  );
};

export default App;
