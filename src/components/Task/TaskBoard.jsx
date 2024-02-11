import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TasKActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);
  const [addModal, setAddModal] = useState(false);

  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const handleFav = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        } else {
          return task;
        }
      })
    );
  };

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    handleClose();
  };
  const handleClose = () => {
    setAddModal(false);
  };
  const handleEdit = (task) => {
    setTaskToUpdate(task);
    setAddModal(true);
  };
  const handleDelete = (taskId) => {
    const taskToDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskToDelete);
  };
  const handleSearch = (search) => {
    if (search.trim() === "") {
      // If search field is empty, set tasks to the original list
      setTasks(tasks);
    } else {
      // If search field is not empty, filter tasks based on search term
      const filtered = tasks.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      );
      setTasks([...filtered]);
    }
  };

  return (
    <section className="mb-20" id="tasks">
      {addModal && (
        <AddTaskModal
          onColseClick={handleClose}
          taskToUpdate={taskToUpdate}
          onCreate={handleAddEditTask}
        />
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <SearchTask onSearch={handleSearch}></SearchTask>
              <TaskActions onAddClick={() => setAddModal(true)}></TaskActions>
            </div>
          </div>
          {tasks.length === 0 ? (
            <h1 className="text-center text-xl">Task List is empty!</h1>
          ) : (
            <TaskList
              tasks={tasks}
              onFav={handleFav}
              onEdit={handleEdit}
              onDelete={handleDelete}
            ></TaskList>
          )}
        </div>
      </div>
    </section>
  );
}
