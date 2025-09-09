import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { path: '/', icon: '📊', label: 'Dashboard', active: true },
    { path: '/users', icon: '👥', label: 'Users' },
    { path: '/submissions', icon: '📝', label: 'Submissions' },
    { path: '/join', icon: '🚀', label: 'Want to Join' }
  ]

  const generalItems = [
    { icon: '⚙️', label: 'Settings' },
    { icon: '❓', label: 'Help' },
    { icon: '🚪', label: 'Logout' }
  ]

  return (
    <div className={`bg-white h-screen shadow-lg transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          {!isCollapsed && <span className="font-semibold text-lg">Donezo</span>}
        </div>
      </div>

      {/* Menu Section */}
      <div className="p-4">
        {!isCollapsed && <div className="text-xs text-gray-500 uppercase tracking-wide mb-3">Menu</div>}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-green-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
              {!isCollapsed && location.pathname === item.path && (
                <span className="ml-auto bg-white bg-opacity-20 text-xs px-2 py-1 rounded">
                  02
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* General Section */}
      <div className="p-4 mt-8">
        {!isCollapsed && <div className="text-xs text-gray-500 uppercase tracking-wide mb-3">General</div>}
        <nav className="space-y-2">
          {generalItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>


      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-20 -right-3 bg-white border border-gray-200 rounded-full p-1 shadow-md hover:shadow-lg transition-shadow"
      >
        <span className={`block w-4 h-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`}>
          ◀
        </span>
      </button>
    </div>
  )
}

export default Sidebar
