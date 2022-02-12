import { ChangeEvent, FormEvent, useState } from 'react'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { v4 } from 'uuid'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addTask, TAG, Task } from '../../redux/slices/todoSlice'

dayjs.extend(utc)

const ID_FORM = 'input-add-new-task'

export function FormInput() {
  const dispatch = useAppDispatch()
  const { currentTag } = useAppSelector((store) => store.todo)
  const [taskName, setTaskName] = useState<string>('')

  function handleChangeTaskName(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target
    setTaskName(value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (taskName === '') {
      alert('input must is not empty!!!')
      return
    }

    if (currentTag === TAG.ALL) {
      alert('tag must is not All. Please choose Home, Work or School and try again')
      return
    }

    const newTask: Task = {
      id: v4(),
      title: taskName,
      tag: currentTag,
      done: false,
      creationDate: dayjs().utc().toISOString(),
    }

    dispatch(addTask(newTask))
    setTaskName('')
  }

  return (
    <div className="flex items-center justify-between w-full">
      <form id={ID_FORM} className="w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full bg-gray-300 px-2 py-1 outline-none rounded-tl-lg rounded-bl-lg"
          value={taskName}
          onChange={handleChangeTaskName}
        />
      </form>
      <button type="submit" form={ID_FORM} className="bg-lime-500 rounded-tr-lg rounded-br-lg px-2 py-1">
        add
      </button>
    </div>
  )
}
