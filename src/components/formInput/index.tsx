import dayjs from "dayjs";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addTask, Task } from "../../redux/slices/todoSlice";

const ID_FORM = "input-add-new-task";

export function FormInput() {
  const dispatch = useAppDispatch();
  const { currentTag } = useAppSelector((store) => store.todo);
  const [taskName, setTaskName] = useState<string>("");

  function handleChangeTaskName(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setTaskName(value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newTask: Task = {
      id: v4(),
      title: taskName,
      tag: currentTag,
      done: false,
      creationDate: dayjs().toISOString(),
    };

    dispatch(addTask(newTask));
  }

  return (
    <>
      <form id={ID_FORM} onSubmit={handleSubmit}>
        <input type="text" value={taskName} onChange={handleChangeTaskName} />
      </form>
      <button type="submit" form={ID_FORM}>
        Add
      </button>
    </>
  );
}
