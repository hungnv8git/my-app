import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { changeCurrentTag, TAG } from '../../redux/slices/todoSlice'

const tags = [
  { value: TAG.ALL, name: 'all' },
  { value: TAG.HOME, name: 'home' },
  { value: TAG.WORK, name: 'work' },
  { value: TAG.SCHOOL, name: 'school' },
]

export function Filter() {
  const { currentTag } = useAppSelector((store) => store.todo)
  const dispatch = useAppDispatch()

  function handleChangeTag(tag: TAG) {
    dispatch(changeCurrentTag(tag))
  }

  return (
    <div className="grid grid-cols-4">
      {tags.map((tag) => (
        <label>
          <input
            key={tag.value}
            type="radio"
            id="tag-filter"
            checked={currentTag === tag.value}
            onChange={() => handleChangeTag(tag.value)}
          />
          {tag.name}
        </label>
      ))}
    </div>
  )
}
