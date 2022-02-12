import { useAppSelector } from "../../hooks/redux";
import { TaskDetail } from "./TaskDetail";

export function ShowTask() {
  const { tasks } = useAppSelector((store) => store.todo);

  return (
    <>
      {tasks.map((task) => (
        <TaskDetail key={task.id} task={task} />
      ))}
    </>
  );
}
