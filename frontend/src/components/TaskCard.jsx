function TaskCard({ task, onDelete }) {
  return (
    <div className="border p-4 rounded-lg">
      <h3 className="font-bold text-lg">{task.title}</h3>

      <p>{task.description}</p>

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
      <p>
        Difficulty:
        {task.difficulty}
      </p>

      <p>
        Estimated Hours:
        {task.estimatedHours}
      </p>
      <p>
  Risk Score:
  <span className="font-semibold">
    {task.riskScore}
  </span>
</p>

<p>
  Completion Probability:
  {task.completionProbability}%
</p>

<p className="text-red-600">
  {task.warning}
</p>

<p className="text-blue-600">
  {task.recommendation}
</p>
      {task.subtasks?.length > 0 && (
        <div className="mt-3">
          <h4 className="font-semibold">Subtasks</h4>

          <ul className="list-disc ml-5">
            {task.subtasks.map((subtask, index) => (
              <li key={index}>{subtask}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={() => onDelete(task.id)}
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
