export const sortByTimestampAscend = (arr) => {
  return arr.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
};
