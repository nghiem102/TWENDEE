import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from './component/DataTable.js'
import {getUsers} from './features/UserSlice.js'

function App() {
  const data = useSelector(users => users.users.value)
  console.log(data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  },[])

  return (
    <div className="App">
      <DataTable/>
    </div>
  )
}

export default App
