import React, { useState } from "react";
import ITask from "../../common/interfaces/task.interface";
import tasksService from "../../services/tasks.service";
import Button from "../Button";
import Modal from "../Modal";

import "./Task.scss";

const Task: React.FunctionComponent<{ task: ITask; onComplete: (task: ITask) => void }> = (
  props
) => {
  const { _id, title } = props.task;
  const { onComplete } = props;
  const [showModal, setShowModal] = useState<boolean>(false);

  const setAsCompleted = () => {
    const updatedTask = {
      ...props.task,
      completed: true,
    };
    tasksService.updateTask(updatedTask);
    setShowModal(false);
    onComplete(updatedTask);
  };

  const onTaskClick = () => {
    window.scrollTo(0, 0);
    setShowModal(true);
  };



  return (
    <>
      <div className="task task--bordered" onClick={onTaskClick}>
        <span className="task__id"> Task #{_id}</span>
        <span className="task__title"> Title: {title}</span>
      </div>
      {showModal && (
        <Modal>
          <div className="task__modal-content">
            <h4 className="task__modal-content__title">Details</h4>
            <div className="task">
              <span className="task__id"> Task #{_id}</span>
              <span className="task__title"> Title: {title}</span>
            </div>
            <div className="task__modal-content__buttons">
              <Button onClick={() => setShowModal(false)} type="strocked">
                CANCEL
              </Button>
              <Button onClick={setAsCompleted} type="raised">
                COMPLETE
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Task;
