const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};

export function getPriority(n) {
  const weight = weights[n.Type] || 0;
  const time = new Date(n.Timestamp).getTime();
  return weight * 1e12 + time;
}

export function getTopNotifications(data, n = 10) {
  return data
    .map(n => ({ ...n, priority: getPriority(n) }))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, n);
}