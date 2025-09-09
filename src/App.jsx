import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Submissions from './pages/Submissions'
import WantToJoin from './pages/WantToJoin'
import './App.css'

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="submissions" element={<Submissions />} />
              <Route path="join" element={<WantToJoin />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
