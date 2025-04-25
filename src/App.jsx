import React from 'react'
import Home from './pages/Home'
import {Route, Routes} from 'react-router-dom'
import BookService from './pages/BookService'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/book' element={<BookService/>}/>
      </Routes>
      
    </div>
  )
}

export default App