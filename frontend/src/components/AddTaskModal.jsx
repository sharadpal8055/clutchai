import { useState } from "react";

function AddTaskModal({
  onSubmit,
}) {
  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      deadline: "",
      priority: "Medium",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData);

    setFormData({
      title: "",
      description: "",
      deadline: "",
      priority: "Medium",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3"
    >

      <input
        name="title"
        placeholder="Task Title"
        value={formData.title}
        onChange={handleChange}
        className="
        border
        p-2
        w-full
        "
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="
        border
        p-2
        w-full
        "
      />

      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        className="
        border
        p-2
        w-full
        "
      />

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        className="
        border
        p-2
        w-full
        "
      >

        <option>
          Low
        </option>

        <option>
          Medium
        </option>

        <option>
          High
        </option>

      </select>

      <button
        className="
        bg-blue-600
        text-white
        px-4
        py-2
        rounded
        "
      >
        Add Task
      </button>

    </form>
  );
}

export default AddTaskModal;