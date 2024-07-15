import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/loginOne'
import Dashboard from './pages/dashboard'
import NoPage from './pages/noPage'
import AlbumPreview from './pages/albumPreview'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/album-preview' element={<AlbumPreview/>} />
          <Route path='*' element={<NoPage/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

// TODO (7.12):
// MAKE LOGIN PAGE
