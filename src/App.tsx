import { Route, Routes } from 'react-router'
import './App.css'
import { Boards } from './screens/Boards'

function App() {

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <Routes>
        <Route path='/boards/:boardId' element={<Boards />} />
      </Routes>
    </div>
  )
}

export default App
