import { useEffect, useState } from "react";

import { useAuth } from "../context/AuthContext";

import { createTask, getUserTasks, deleteTask } from "../services/taskService";

import AddTaskModal from "../components/AddTaskModal";

import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { user } = useAuth();

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getUserTasks(user.uid);

    setTasks(data);
  };

  useEffect(() => {
    if (user) {
      fetchTasks();
    }
  }, [user]);

  const handleAddTask = async (taskData) => {
    await createTask({
      ...taskData,

      userId: user.uid,

      progress: 0,

      status: "Pending",

      createdAt: new Date(),
    });

    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);

    fetchTasks();
  };

  return (
    <div
      className="
   p-8
   "
    >
      <h1
        className="
    text-3xl
    font-bold
    mb-6
    "
      >
        My Tasks
      </h1>

      <AddTaskModal onSubmit={handleAddTask} />

      <div
        className="
    grid
    md:grid-cols-3
    gap-4
    mt-8
    "
      >
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
