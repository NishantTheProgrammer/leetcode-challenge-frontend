import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Sidebar from './components/Sidebar'
import MainLayout from './components/MainLayout'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Submissions from './pages/Submissions'
import WantToJoin from './pages/WantToJoin'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex bg-gray-50 dark:bg-gray-900">
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
    </ThemeProvider>
  )
}

export default App
