import { useEffect, useState } from 'react'
import { useAppSelector } from '../../hooks/redux'
import { TAG, Task } from '../../redux/slices/todoSlice'
import { TaskDetail } from './TaskDetail'

export function ShowTask() {
  const { tasks, currentTag } = useAppSelector((store) => store.todo)

  return (
    <>
      {currentTag === TAG.ALL
        ? tasks.map((task) => <TaskDetail key={task.id} task={task} />)
        : tasks.filter((task) => task.tag === currentTag).map((task) => <TaskDetail key={task.id} task={task} />)}
    </>
  )
}
