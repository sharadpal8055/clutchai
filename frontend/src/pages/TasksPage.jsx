import Masonry from "react-masonry-css";

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
  const handleSaveTask = async (updatedTask) => {
    try {
      console.log("Updating Task...");
      console.log(updatedTask);

      const updated = await updateAITask(updatedTask.id, updatedTask);

      console.log("Updated Task");
      console.log(updated);

      setShowEdit(false);
      setEditingTask(null);
    } catch (error) {
      console.error(error);

      alert("Failed to update task.");
    }
  };
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

  const handleDelete = async (id) => {
    await deleteTask(id);

    // fetchTasks();
  };

  return (
  <>
    <div
      className="
      w-full
      max-w-[1700px]
      mx-auto

      px-4
      sm:px-6
      lg:px-8

      py-8
      "
    >
      {/* Header */}

      <div
        className="
        mb-10

        flex
        flex-col
        lg:flex-row

        lg:items-center
        lg:justify-between

        gap-4
        "
      >
        <div>
          <h1
            className="
            text-4xl
            font-extrabold

            text-slate-900
            dark:text-white
            "
          >
            My Tasks
          </h1>

          <p
            className="
            mt-2
            text-slate-500
            dark:text-slate-400
            "
          >
            Create, organize and track AI-powered tasks effortlessly.
          </p>
        </div>

        <div
          className="
          flex
          gap-4
          flex-wrap
          "
        >
          <div
            className="
            rounded-2xl
            bg-white
            dark:bg-slate-900

            shadow

            px-6
            py-4
            "
          >
            <p className="text-sm text-slate-500">
              Total
            </p>

            <h2 className="text-2xl font-bold">
              {tasks.length}
            </h2>
          </div>

          <div
            className="
            rounded-2xl
            bg-white
            dark:bg-slate-900

            shadow

            px-6
            py-4
            "
          >
            <p className="text-sm text-slate-500">
              Completed
            </p>

            <h2 className="text-2xl font-bold text-green-600">
              {tasks.filter(t => t.status === "Completed").length}
            </h2>
          </div>

          <div
            className="
            rounded-2xl
            bg-white
            dark:bg-slate-900

            shadow

            px-6
            py-4
            "
          >
            <p className="text-sm text-slate-500">
              Pending
            </p>

            <h2 className="text-2xl font-bold text-orange-500">
              {tasks.filter(t => t.status !== "Completed").length}
            </h2>
          </div>
        </div>
      </div>

      {/* Form */}

      <section
        className="
        rounded-3xl

        bg-white
        dark:bg-slate-900

        shadow-xl

        border
        border-slate-200
        dark:border-slate-800

        p-6
        sm:p-8

        mb-10
        "
      >
        <div className="mb-6">
          <h2
            className="
            text-2xl
            font-bold
            "
          >
             Create New Task
          </h2>

          <p
            className="
            mt-2
            text-slate-500
            "
          >
            AI will analyze your task and generate recommendations automatically.
          </p>
        </div>

        <AddTaskModal onSubmit={handleAddTask} />
      </section>

      {/* Tasks */}

      <div
        className="
        flex
        items-center
        justify-between

        mb-6
        "
      >
        <h2
          className="
          text-2xl
          font-bold
          "
        >
          Your Tasks
        </h2>

        <span
          className="
          rounded-full

          bg-cyan-100
          text-cyan-700

          px-4
          py-2

          text-sm
          font-semibold
          "
        >
          {tasks.length} Tasks
        </span>
      </div>

{tasks.length === 0 ? (
  <div
    className="
      rounded-3xl
      border
      border-dashed
      border-slate-300
      dark:border-slate-700
      bg-white
      dark:bg-slate-900
      py-24
      text-center
      shadow-sm
    "
  >
    <div className="text-7xl mb-6">📋</div>

    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
      No Tasks Yet
    </h2>

    <p className="mt-3 text-slate-500">
      Create your first AI task to get started.
    </p>
  </div>
) : (
  <section
    className="
      rounded-3xl
      border
      border-slate-200
      dark:border-slate-800
      bg-white
      dark:bg-slate-900
      shadow-xl
      p-6
      lg:p-8
    "
  >
    <Masonry
      breakpointCols={{
        default: 3,
        1536: 3,
        1280: 2,
        768: 1,
      }}
      className="flex -ml-6 w-auto"
      columnClassName="pl-6 bg-clip-padding"
    >
      {tasks.map((task) => (
        <div key={task.id} className="mb-6">
          <TaskCard
            task={task}
            onDelete={handleDelete}
            onProgressUpdate={handleProgressUpdate}
            onEdit={handleEdit}
          />
        </div>
      ))}
    </Masonry>
  </section>
)}
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
