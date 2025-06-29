import * as Icons from "../../icons/sidebar";

interface TaskFormButtonsProps {
  onPriorityClick: () => void;
  onStateClick: () => void;
  onDateClick: () => void;
  currentPriority: number;
  currentState: number;
  currentDate: string;
}

export function TaskFormButtons({
  onPriorityClick,
  onStateClick,
  onDateClick,
  currentPriority,
  currentState,
  currentDate,
}: TaskFormButtonsProps) {
  const getPriorityColor = (priority: number) => {
    switch (priority) {
      case 3:
        return "#ff4b2b";
      case 2:
        return "#ffb13d";
      default:
        return "#808080";
    }
  };

  const getStateColor = (state: number) => {
    switch (state) {
      case 3:
        return "#4CAF50";
      case 2:
        return "#FFC107";
      default:
        return "#808080";
    }
  };

  const formatDate = (dateString: string) => {
    const today = new Date();
    const [year, month, day] = dateString.split("-").map(Number);
    const localDate = new Date(year, month - 1, day);
  
    const isToday =
      today.getFullYear() === localDate.getFullYear() &&
      today.getMonth() === localDate.getMonth() &&
      today.getDate() === localDate.getDate();
  
    if (isToday) return "Hoy";
  
    return localDate.toLocaleDateString("es-PE", {
      day: "numeric",
      month: "short",
    });
  };
  

  return (
    <div className="task-form-buttons">
      <button
        type="button"
        className="task-action-button"
        aria-label="onDateClick"
        onClick={onDateClick}
      >
        <Icons.TodayIcon className="icon" />
        {formatDate(currentDate)}
      </button>
      <button
        type="button"
        className="task-action-button"
        aria-label="Prioridad"
        onClick={onPriorityClick}
        style={{ color: getPriorityColor(currentPriority) }}
      >
        <Icons.FiltersIcon className="icon" />
        Prioridad
      </button>
      <button
        type="button"
        className="task-action-button"
        aria-label="Estado"
        onClick={onStateClick}
        style={{ color: getStateColor(currentState) }}
      >
        <Icons.BellIcon className="icon" />
        Estado
      </button>
    </div>
  );
}
