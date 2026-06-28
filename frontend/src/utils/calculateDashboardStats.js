export const calculateDashboardStats = (tasks = []) => {

  const completed = tasks.filter(
    (task) => task.progress === 100
  );

  const highRisk = tasks.filter(
    (task) => task.riskScore >= 80
  );

  const rescueTasks = tasks.filter(
    (task) => task.rescuePlan
  );

  const clutchScore =
    tasks.length === 0
      ? 0
      : Math.round(
          tasks.reduce(
            (sum, task) => sum + (task.clutchScore || 0),
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
            (sum, task) => sum + (task.riskScore || 0),
            0
          ) / tasks.length
        );

  return {

    totalTasks: tasks.length,

    completed: completed.length,

    highRisk: highRisk.length,

    rescueMode: rescueTasks.length,

    clutchScore,

    completionRate,

    averageRisk,

    streak: 0,

  };

};