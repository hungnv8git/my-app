import { Filter } from './components/filter'
import { FormInput } from './components/formInput'
import { ShowTask } from './components/showTask'

function App() {
  return (
    <div className="w-[300px] mx-auto">
      <FormInput />
      <Filter />
      <ShowTask />
    </div>
  )
}

export default App
