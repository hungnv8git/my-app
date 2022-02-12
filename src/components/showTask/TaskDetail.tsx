import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import updateLocale from 'dayjs/plugin/updateLocale'
import { deleteTask, Task, toggleCompleted } from '../../redux/slices/todoSlice'
import { useAppDispatch } from '../../hooks/redux'

dayjs.extend(utc)
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  months: [
    'tháng giêng',
    'tháng hai',
    'tháng ba',
    'tháng tư',
    'tháng năm',
    'tháng sáu',
    'tháng bảy',
    'tháng tám',
    'tháng chín',
    'tháng mười',
    'tháng mười Một',
    'tháng mười Hai',
  ],
})

interface Props {
  task: Task
}

export function TaskDetail({ task }: Props) {
  const dispatch = useAppDispatch()

  function handleRemove(id: Task['id']) {
    dispatch(deleteTask(id))
  }

  function handleToggleCompleted(id: Task['id']) {
    dispatch(toggleCompleted(id))
  }

  return (
    <div
      className={`flex px-2 my-2 items-center justify-between ${
        task.done ? 'bg-green-400' : 'bg-orange-200'
      } cursor-pointer`}
      title={task.done ? "click to don't finish task" : 'click to finish task'}
      onClick={() => handleToggleCompleted(task.id)}
    >
      <div className="flex flex-col">
        <p>
          <span className={`text-[20px] ${task.done && 'line-through'}`}>{task.title}</span>{' '}
          <span className="italic text-[15px] font-semibold">{task.done && '(Done)'}</span>
        </p>
        <span className="italic text-[12px]">
          {dayjs(task.creationDate).utc().local().format('HH:mm, ngày DD MMMM, YYYY')}
        </span>
      </div>

      <button
        className="bg-red-500 rounded-full flex justify-center items-center h-6 px-4"
        onClick={() => handleRemove(task.id)}
      >
        remove
      </button>
    </div>
  )
}
