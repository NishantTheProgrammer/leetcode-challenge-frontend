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

  return (
    <div className={`bg-white dark:bg-gray-800 h-screen shadow-sm transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} border-r border-gray-100 dark:border-gray-700 relative`}>
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">✓</span>
          </div>
          {!isCollapsed && <span className="font-bold text-xl text-gray-900 dark:text-white">Donezo</span>}
        </div>
      </div>

      {/* Menu Section */}
      <div className="px-6">
        {!isCollapsed && <div className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 font-medium">MENU</div>}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                location.pathname === item.path
                  ? 'bg-green-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {!isCollapsed && <span className="font-medium text-sm">{item.label}</span>}
              {!isCollapsed && location.pathname === item.path && (
                <span className="ml-auto bg-white bg-opacity-20 text-xs px-2 py-0.5 rounded text-white font-medium">
                  02
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-20 -right-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-1 shadow-md hover:shadow-lg transition-shadow"
      >
        <span className={`block w-4 h-4 transition-transform text-gray-600 dark:text-gray-300 ${isCollapsed ? 'rotate-180' : ''}`}>
          ◀
        </span>
      </button>
    </div>
  )
}

export default Sidebar
