import { Outlet } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { users } from '../data/users'
import { useSeason } from '../contexts/SeasonContext.jsx'

const MainLayout = () => {
  const { selectedSeasonId, setSelectedSeasonId } = useSeason()
  const [seasons, setSeasons] = useState([])
  const [loadingSeasons, setLoadingSeasons] = useState(true)
  const [seasonsError, setSeasonsError] = useState(null)
  const totalUsers = users.length

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        setLoadingSeasons(true)
        const res = await axios.get('http://localhost:3000/season')
        const apiSeasons = Array.isArray(res.data?.data) ? res.data.data : []
        setSeasons(apiSeasons)
        if (apiSeasons.length > 0) {
          setSelectedSeasonId(apiSeasons[0]._id)
        }
      } catch (err) {
        setSeasonsError(err.response?.data?.message || err.message || 'Failed to load seasons')
      } finally {
        setLoadingSeasons(false)
      }
    }
    fetchSeasons()
  }, [setSelectedSeasonId])

  const formatSeasonLabel = (s) => {
    const start = new Date(s.startDate)
    const end = new Date(s.endDate)
    const startStr = start.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
    const endStr = end.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
    return `${s.name} (${startStr} - ${endStr})`
  }
  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Season Selector */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-700 dark:text-gray-300 font-medium">Select Season:</label>
            <select 
              value={selectedSeasonId}
              onChange={(e) => setSelectedSeasonId(e.target.value)}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {loadingSeasons && <option>Loading...</option>}
              {seasonsError && <option disabled>Error loading seasons</option>}
              {!loadingSeasons && !seasonsError && seasons.map(season => (
                <option key={season._id} value={season._id}>
                  {formatSeasonLabel(season)}
                </option>
              ))}
            </select>
          </div>

          {/* Right - Public Stats and Theme Toggle */}
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

            {/* Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
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
