export const getColorByStatus = (status: string) => {
  switch (status) {
    case "Active":
      return "blue";
    case "New":
      return "violet";
    case "Completed":
      return "green";
    default:
      return "blue";
  }
};
