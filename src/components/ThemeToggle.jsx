import { useTheme } from '../contexts/ThemeContext'

const ThemeToggle = ({ variant = 'header' }) => {
  const { isDarkMode, toggleTheme } = useTheme()

  if (variant === 'header') {
    return (
      <button
        onClick={toggleTheme}
        className={`
          group relative flex items-center justify-center
          w-10 h-10 p-2
          bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600
          rounded-lg transition-all duration-300 ease-in-out
          border border-gray-200 dark:border-gray-600
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
          shadow-sm hover:shadow-md
        `}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {/* Toggle Switch Background */}
        <div className={`
          relative flex items-center justify-center
          w-6 h-6 rounded-full
          transition-all duration-300 ease-in-out
          ${isDarkMode 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
            : 'bg-gradient-to-r from-yellow-400 to-orange-500'
          }
        `}>
          {/* Icon */}
          <span className={`
            text-sm transition-all duration-500 ease-in-out transform
            ${isDarkMode ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}
            filter drop-shadow-sm
          `}>
            {isDarkMode ? '🌙' : '☀️'}
          </span>
        </div>

        {/* Ripple Effect */}
        <div className={`
          absolute inset-0 rounded-lg opacity-0 group-active:opacity-30
          bg-gradient-to-r ${isDarkMode 
            ? 'from-blue-400 to-purple-500' 
            : 'from-yellow-400 to-orange-500'
          }
          transition-opacity duration-150 ease-in-out pointer-events-none
        `} />

        {/* Outer Glow Effect on Hover */}
        <div className={`
          absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-20
          bg-gradient-to-r ${isDarkMode 
            ? 'from-blue-400 to-purple-500' 
            : 'from-yellow-400 to-orange-500'
          }
          transition-all duration-300 ease-in-out pointer-events-none
          blur-md -z-10
        `} />
      </button>
    )
  }

  // Sidebar variant (original design)
  return (
    <button
      onClick={toggleTheme}
      className={`
        group relative flex items-center justify-center
        w-full px-3 py-2.5
        bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600
        rounded-xl transition-all duration-300 ease-in-out
        border border-gray-200 dark:border-gray-600
        focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50
        shadow-sm hover:shadow-md
      `}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Switch Background */}
      <div className={`
        relative flex items-center
        w-12 h-6 mr-3
        bg-gray-300 dark:bg-gray-800 rounded-full
        transition-all duration-300 ease-in-out
        ${isDarkMode ? 'bg-blue-600 dark:bg-blue-500' : ''}
      `}>
        {/* Toggle Switch Circle */}
        <div className={`
          absolute w-4 h-4 bg-white rounded-full shadow-md
          transform transition-all duration-300 ease-in-out
          ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}
          flex items-center justify-center
        `}>
          {/* Icon inside the circle */}
          <span className={`
            text-xs transition-all duration-300 ease-in-out
            ${isDarkMode ? 'text-blue-600 rotate-180' : 'text-yellow-500'}
          `}>
            {isDarkMode ? '🌙' : '☀️'}
          </span>
        </div>
      </div>

      {/* Text Label */}
      <div className="flex flex-col items-start">
        <span className={`
          text-sm font-medium transition-all duration-300 ease-in-out
          ${isDarkMode 
            ? 'text-white group-hover:text-blue-200' 
            : 'text-gray-700 group-hover:text-gray-900'
          }
        `}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </span>
        <span className={`
          text-xs transition-all duration-300 ease-in-out
          ${isDarkMode 
            ? 'text-gray-300 group-hover:text-blue-300' 
            : 'text-gray-500 group-hover:text-gray-600'
          }
        `}>
          {isDarkMode ? 'Switch to light' : 'Switch to dark'}
        </span>
      </div>

      {/* Ripple Effect */}
      <div className={`
        absolute inset-0 rounded-xl opacity-0 group-active:opacity-20
        bg-gradient-to-r from-green-400 to-blue-500
        transition-opacity duration-150 ease-in-out pointer-events-none
      `} />

      {/* Glow Effect on Hover */}
      <div className={`
        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10
        bg-gradient-to-r ${isDarkMode 
          ? 'from-blue-400 to-purple-500' 
          : 'from-yellow-400 to-orange-500'
        }
        transition-all duration-300 ease-in-out pointer-events-none
        blur-sm
      `} />
    </button>
  )
}

export default ThemeToggle
