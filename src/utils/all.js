/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("fr-fr", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";
