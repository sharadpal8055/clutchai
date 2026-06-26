export const generateInsights = (tasks = []) => {
  const total = tasks.length;

  const completed = tasks.filter((task) => task.progress === 100).length;

  const highRisk = tasks.filter((task) => task.riskScore >= 80);

  const rescueTasks = tasks.filter((task) => task.rescuePlan);

  const upcoming = [...tasks].sort(
    (a, b) => new Date(a.deadline) - new Date(b.deadline),
  )[0];

  const avgRisk =
    total === 0
      ? 0
      : Math.round(
          tasks.reduce((sum, task) => sum + (task.riskScore || 0), 0) / total,
        );

  return {
    productivity:
      completed === total && total > 0
        ? "Excellent productivity! All current tasks are completed."
        : `You have ${total} active tasks with ${completed} completed.`,

    workload:
      highRisk.length === 0
        ? "Your workload is currently manageable."
        : `${highRisk.length} task(s) require immediate attention.`,

    recommendation: upcoming
      ? `Prioritize "${upcoming.title}" before ${upcoming.deadline}.`
      : "No upcoming deadlines.",

    suggestion:
      avgRisk >= 80
        ? "Schedule two uninterrupted deep-work sessions today."
        : avgRisk >= 50
          ? "Maintain steady progress and review priorities tonight."
          : "You're on track. Keep your current pace.",

    focus: rescueTasks.length
      ? rescueTasks[0].title
      : upcoming?.title || "No urgent focus today",
  };
};
