import { useEffect, useState } from "react";

export default function EditTaskModal({
  task,

  isOpen,

  onClose,

  onSave,
}) {
const [formData, setFormData] = useState({
  title: "",
  description: "",
  deadline: "",
  priority: "Medium",
});

useEffect(() => {

  if (!task) return;

  setFormData({
    title: task.title,
    description: task.description,
    deadline: task.deadline,
    priority: task.priority,
  });

}, [task]);
if (!isOpen || !task || !formData) {
  return null;
}

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-5">✏ Edit Task</h2>

        <input
          className="border rounded w-full p-3 mb-3"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,

              title: e.target.value,
            })
          }
        />

        <textarea
          className="border rounded w-full p-3 mb-3"
          rows={4}
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,

              description: e.target.value,
            })
          }
        />

        <input
          type="date"
          className="border rounded w-full p-3 mb-3"
          value={formData.deadline}
          onChange={(e) =>
            setFormData({
              ...formData,

              deadline: e.target.value,
            })
          }
        />

        <select
          className="border rounded w-full p-3"
          value={formData.priority}
          onChange={(e) =>
            setFormData({
              ...formData,

              priority: e.target.value,
            })
          }
        >
          <option>Low</option>

          <option>Medium</option>

          <option>High</option>
        </select>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-5 py-2 rounded bg-gray-200">
            Cancel
          </button>

          <button
            onClick={() => onSave({ ...task, ...formData })}
            className="px-5 py-2 rounded bg-blue-600 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
