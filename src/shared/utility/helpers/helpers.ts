export const getColorByStatus = (status: string) => {
  switch (status) {
    case "active":
      return "blue";
    case "new":
      return "violet";
    case "completed":
      return "green";
    default:
      return "blue";
  }
};
