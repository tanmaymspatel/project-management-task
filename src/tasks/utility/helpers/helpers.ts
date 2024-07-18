export const getFilteredTasks = <T, K extends keyof T>(
  list: T[],
  key: K,
  value: T[K]
): T[] => {
  return list?.filter((item) => item[key] === value);
};
