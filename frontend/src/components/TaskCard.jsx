function TaskCard({
  task,
  onDelete,
}) {
  return (
    <div className="border p-4 rounded-lg">

      <h3 className="font-bold text-lg">
        {task.title}
      </h3>

      <p>
        {task.description}
      </p>

      <p>
        Deadline:
        {task.deadline}
      </p>

      <p>
        Priority:
        {task.priority}
      </p>

      <p>
        Progress:
        {task.progress}%
      </p>

      <button
        onClick={() =>
          onDelete(task.id)
        }
        className="
        bg-red-500
        text-white
        px-3
        py-1
        rounded
        mt-2
        "
      >
        Delete
      </button>

    </div>
  );
}

export default TaskCard;