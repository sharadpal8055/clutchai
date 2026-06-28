import { useState } from "react";

function AddTaskModal({ onSubmit }) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
 

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "Medium",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (loading) return;

  try {
    setLoading(true);
    setSuccess(false);

    await onSubmit(formData);

    // show success
    setSuccess(true);

    // clear form
    setFormData({
      title: "",
      description: "",
      deadline: "",
      priority: "Medium",
    });

    // show success for 1.5 sec
    setTimeout(() => {
      setSuccess(false);
    }, 1500);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        max-w-2xl
        mx-auto
        space-y-6
      "
    >
      {/* Title */}

      <div>
        <label className="block mb-2 font-semibold text-slate-700 dark:text-slate-300">
          Task Title
        </label>

        <input
          type="text"
          name="title"
          placeholder="Enter task title..."
          value={formData.title}
          onChange={handleChange}
          required
          className="
            w-full

            rounded-2xl

            border
            border-slate-300
            dark:border-slate-700

            bg-white
            dark:bg-slate-900

            px-5
            py-3

            text-slate-900
            dark:text-white

            placeholder:text-slate-400

            outline-none

            transition-all
            duration-300

            focus:border-cyan-500
            focus:ring-4
            focus:ring-cyan-500/20
          "
        />
      </div>

      {/* Description */}

      <div>
        <label className="block mb-2 font-semibold text-slate-700 dark:text-slate-300">
          Description
        </label>

        <textarea
          rows={5}
          name="description"
          placeholder="Describe your task..."
          value={formData.description}
          onChange={handleChange}
          className="
            w-full

            rounded-2xl

            border
            border-slate-300
            dark:border-slate-700

            bg-white
            dark:bg-slate-900

            px-5
            py-4

            resize-none

            text-slate-900
            dark:text-white

            placeholder:text-slate-400

            outline-none

            transition-all

            focus:border-cyan-500
            focus:ring-4
            focus:ring-cyan-500/20
          "
        />
      </div>

      {/* Date + Priority */}

      <div className="grid gap-5 md:grid-cols-2">
        {/* Deadline */}

        <div>
          <label className="block mb-2 font-semibold text-slate-700 dark:text-slate-300">
            Deadline
          </label>

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="
              w-full

              rounded-2xl

              border
              border-slate-300
              dark:border-slate-700

              bg-white
              dark:bg-slate-900

              px-5
              py-3

              text-slate-900
              dark:text-white

              outline-none

              transition-all

              focus:border-cyan-500
              focus:ring-4
              focus:ring-cyan-500/20
            "
          />
        </div>

        {/* Priority */}

        <div>
          <label className="block mb-2 font-semibold text-slate-700 dark:text-slate-300">
            Priority
          </label>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="
              w-full

              rounded-2xl

              border
              border-slate-300
              dark:border-slate-700

              bg-white
              dark:bg-slate-900

              px-5
              py-3

              text-slate-900
              dark:text-white

              outline-none

              transition-all

              focus:border-cyan-500
              focus:ring-4
              focus:ring-cyan-500/20
            "
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>

      {/* Submit */}

 <button
  type="submit"
  disabled={loading}
  className={`
    w-full

    rounded-2xl

    px-6
    py-4

    font-bold
    text-white

    transition-all
    duration-300

    ${
      loading
        ? "bg-slate-400 cursor-not-allowed"
        : `
        bg-gradient-to-r
        from-cyan-500
        via-blue-600
        to-indigo-600

        shadow-lg
        shadow-cyan-500/30

        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-cyan-500/40

        active:scale-95
        `
    }
  `}
>
  {success ? (
  <div className="flex items-center justify-center gap-2">
    <span className="text-xl">✅</span>
    <span>Task Created Successfully</span>
  </div>
) : loading ? (
  <div className="flex items-center justify-center gap-3">
    <svg
      className="h-5 w-5 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="white"
        strokeWidth="3"
        opacity=".3"
      />

      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>

    <span>Creating Task...</span>
  </div>
) : (
  <div className="flex items-center justify-center gap-2">
    
    <span>Create Task</span>
  </div>
)}
</button>
    </form>
  );
}

export default AddTaskModal;