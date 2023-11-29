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
      <input type="radio" name="filter" value="ALL" onChange={e => handleChange(e)} checked={filter === 'ALL'} /> all 
      <input type="radio" name="filter" value="IMPORTANT" onChange={e => handleChange(e)} checked={filter === 'IMPORTANT'} /> important
      <input type="radio" name="filter" value="NOT IMPORTANT" onChange={e => handleChange(e)} checked={filter === 'NOT IMPORTANT'} /> not important
    </div>
  )
}

export default Filters;