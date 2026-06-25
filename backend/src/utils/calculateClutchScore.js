export const calculateClutchScore = ({ riskScore, progress }) => {
  const score = 100 - riskScore * 0.5 + progress * 0.3;

  return Math.max(0, Math.min(100, Math.round(score)));
};
