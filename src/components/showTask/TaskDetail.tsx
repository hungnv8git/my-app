import { Task } from "../../redux/slices/todoSlice";

interface Props {
  task: Task;
}

export function TaskDetail({ task }: Props) {
  return (
    <div>
      <span>{task.title}</span>
    </div>
  );
}
