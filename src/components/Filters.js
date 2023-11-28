import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "../Reducers/filterReducer"

const Filters = () => {

  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  const handleChange = (event) => {
    event.preventDefault()
    const filter = event.target.value
    dispatch(changeFilter(filter))
  }

  return (
    <div>
      all <input type="radio" name="filter" onChange={e => handleChange()}/>
      important <input type="radio" name="filter" />
      nonimportant <input type="radio" name="filter" />
    </div>
  )
}

export default Filters;