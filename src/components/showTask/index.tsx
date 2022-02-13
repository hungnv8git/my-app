import { useAppSelector } from '../../hooks/redux'
import { TAG } from '../../redux/slices/todoSlice'
import { RootState } from '../../redux/store'
import { TaskDetail } from './TaskDetail'

export function ShowTask() {
  const { currentTag, tasks } = useAppSelector((state: RootState) => state.todo)

  return (
    <>
      {currentTag === TAG.ALL
        ? tasks.map((task) => <TaskDetail key={task.id} task={task} />)
        : tasks.filter((task) => task.tag === currentTag).map((task) => <TaskDetail key={task.id} task={task} />)}
    </>
  )
}
