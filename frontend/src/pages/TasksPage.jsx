import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";

import { db } from "../firebase/firebase";

import { useAuth } from "../context/AuthContext";
import { analyzeTask } from "../services/aiService";
import { createTask, getUserTasks, deleteTask } from "../services/taskService";
import { createAITask, updateAITask } from "../services/taskApi";
import { analyzeRisk } from "../services/riskService";
import AddTaskModal from "../components/AddTaskModal";

import TaskCard from "../components/TaskCard";
import { updateTask } from "../services/taskService";
import { calculateClutchScore } from "../utils/calculateClutchScore";
import EditTaskModal from "../components/EditTaskModal";
import Navbar from "../layouts/Navbar";
function TasksPage() {
  const { user } = useAuth();
  const [editingTask, setEditingTask] = useState(null);

  const [showEdit, setShowEdit] = useState(false);

  const [tasks, setTasks] = useState([]);
  const handleEdit = (task) => {
    setEditingTask(task);

    setShowEdit(true);
  };

  // const fetchTasks = async () => {
  //   const data = await getUserTasks(user.uid);

  //   setTasks(data);
  // };
  const handleSaveTask = async (updatedTask) => {
    try {
      console.log("Updating Task...");
      console.log(updatedTask);

      const updated = await updateAITask(updatedTask.id, updatedTask);

      console.log("Updated Task");
      console.log(updated);

      // Update UI immediately
      // setTasks((prev) =>
      //   prev.map((task) => (task.id === updated.id ? updated : task)),
      // );

      // Close modal
      setShowEdit(false);
      setEditingTask(null);
    } catch (error) {
      console.error(error);

      alert("Failed to update task.");
    }
  };

  // useEffect(() => {
  //   if (user) {
  //     fetchTasks();
  //   }
  // }, [user]);
  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, "tasks"), where("userId", "==", user.uid));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const taskList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTasks(taskList);
    });

    return () => unsubscribe();
  }, [user]);
  const handleAddTask = async (taskData) => {
    try {
      console.log("Creating AI Task...");

      const response = await createAITask({
        ...taskData,

        userId: user.uid,

        progress: 0,

        status: "Pending",

        createdAt: new Date(),
      });

      console.log(response);

      // // Refresh from Firestore
      // const updatedTasks = await getUserTasks(user.uid);

      // setTasks(updatedTasks);
    } catch (error) {
      console.error(error);

      alert("Failed to create task");
    }
  };
  const handleProgressUpdate = async (id, progress) => {
    try {
      const currentTask = tasks.find((task) => task.id === id);

      const clutchScore = calculateClutchScore({
        riskScore: currentTask.riskScore,

        progress,
      });

      await updateTask(
        id,

        {
          progress,

          status: progress === 100 ? "Completed" : "Pending",

          clutchScore,
        },
      );

      // fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  //   const handleAddTask = async (taskData) => {
  //     const aiData =
  //  await analyzeTask({

  //   title:
  //    taskData.title,

  //   description:
  //    taskData.description

  //  });
  //     await createTask({
  //       ...taskData,
  //       ...aiData,

  //       userId: user.uid,

  //       progress: 0,

  //       status: "Pending",

  //       createdAt: new Date(),
  //     });

  //     fetchTasks();
  //   };

  const handleDelete = async (id) => {
    await deleteTask(id);

    // fetchTasks();
  };

  return (

    <>
    <Navbar/>
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
          <TaskCard
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onProgressUpdate={handleProgressUpdate}
            onEdit={handleEdit}
          />
        ))}
      </div>
      <EditTaskModal
        task={editingTask}
        isOpen={showEdit}
        onClose={() => {
          setShowEdit(false);
          setEditingTask(null);
        }}
        onSave={handleSaveTask}
      />
    </div>
    </>
  );
}

export default TasksPage;
