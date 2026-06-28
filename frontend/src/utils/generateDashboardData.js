export const generateDashboardData = (tasks = []) => {

  const completed = tasks.filter(
    task => task.progress === 100
  );

  const highRisk = tasks.filter(
    task => task.riskScore >= 80
  );

  const rescueTasks = tasks.filter(
    task => task.rescuePlan
  );

  const clutchScore =
    tasks.length === 0
      ? 0
      : Math.round(
          tasks.reduce(
            (sum, t) => sum + (t.clutchScore || 0),
            0
          ) / tasks.length
        );

  const completionRate =
    tasks.length === 0
      ? 0
      : Math.round(
          (completed.length / tasks.length) * 100
        );

  const averageRisk =
    tasks.length === 0
      ? 0
      : Math.round(
          tasks.reduce(
            (sum, t) => sum + (t.riskScore || 0),
            0
          ) / tasks.length
        );

  const stats = {

    totalTasks: tasks.length,

    completed: completed.length,

    highRisk: highRisk.length,

    rescueMode: rescueTasks.length,

    clutchScore,

    completionRate,

    averageRisk,

    productivityScore:
      Math.round(
        (completionRate * 0.6) +
        ((100 - averageRisk) * 0.4)
      ),

    streak: 0,

  };

  const nextTask = [...tasks]
  .filter(task => task.deadline)
  .sort(
    (a, b) =>
      new Date(a.deadline) -
      new Date(b.deadline)
  )[0];

const insights = {

  productivity:
    `You have ${tasks.length} active task(s) with ${completed.length} completed.`,

  workload:
    highRisk.length > 0
      ? `${highRisk.length} high-risk task(s) require immediate attention.`
      : "Your workload is under control.",

  recommendation:
    nextTask
      ? `Prioritize "${nextTask.title}" before ${nextTask.deadline}.`
      : "You're all caught up.",

  suggestion:
    averageRisk >= 70
      ? "Reduce workload by completing one high-risk task today."
      : "Maintain steady progress and review priorities tonight.",

  focus:
    nextTask
      ? nextTask.title
      : "No urgent task today",

};

  return {

    stats,

    insights,

  };

};