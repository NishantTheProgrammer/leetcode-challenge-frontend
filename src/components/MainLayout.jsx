import { Outlet } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useState } from 'react'
import { users } from '../data/users'

const MainLayout = () => {
  const [selectedSeason, setSelectedSeason] = useState('1')
  const totalUsers = users.length

  const seasons = [
    { id: '1', name: 'Season 1', date: 'Jan 2024 - Mar 2024' },
    { id: '2', name: 'Season 2', date: 'Apr 2024 - Jun 2024' },
    { id: '3', name: 'Season 3', date: 'Jul 2024 - Sep 2024' },
    { id: '4', name: 'Season 4', date: 'Oct 2024 - Dec 2024' },
  ]
  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Season Selector */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-700 dark:text-gray-300 font-medium">Select Season:</label>
            <select 
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {seasons.map(season => (
                <option key={season.id} value={season.id}>
                  {season.name} ({season.date})
                </option>
              ))}
            </select>
          </div>

          {/* Center - Public Stats */}
          <div className="flex items-center space-x-6">
            {/* Total Participants */}
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">👥</span>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">{totalUsers} Users</div>
                <div className="text-xs text-gray-500">Participating</div>
              </div>
            </div>

            {/* Days Remaining */}
            <div className="flex items-center space-x-2">
              <span className="text-orange-500">⏳</span>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">45 Days</div>
                <div className="text-xs text-gray-500">Season Remaining</div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
