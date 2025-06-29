export const formatDate = (dateString?: string) => {
  if (!dateString) return "No especificada";

  // Detectar formato yyyy-MM-dd
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    const [year, month, day] = dateString.split("-").map(Number);
    const localDate = new Date(year, month - 1, day); // NO se suma día

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return localDate.toLocaleDateString("es-PE", options);
  }

  // Fallback si viene con hora incluida
  const date = new Date(dateString);
  return date.toLocaleDateString("es-PE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
