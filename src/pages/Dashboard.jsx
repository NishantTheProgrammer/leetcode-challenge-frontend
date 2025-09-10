import { useState, useEffect } from 'react'
import Overall from '../components/charts/Overall'
import DifficultyDistribution from '../components/charts/DifficultyDistribution'
import TopicProgress from '../components/charts/TopicProgress'
import YearlyContribution from '../components/charts/YearlyContribution'
import LanguageUsage from '../components/charts/LanguageUsage'
import SolveTime from '../components/charts/SolveTime'

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
  }

  const stats = [
    { title: 'Total Problems', value: '24', change: 'Solved this month', color: 'bg-green-600', icon: '🎯' },
    { title: 'Easy Problems', value: '10', change: '+3 from last week', color: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700', textColor: 'text-gray-900 dark:text-white', icon: '🟢' },
    { title: 'Medium Problems', value: '12', change: '+5 from last week', color: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700', textColor: 'text-gray-900 dark:text-white', icon: '🟡' },
    { title: 'Hard Problems', value: '2', change: '+1 from last week', color: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700', textColor: 'text-gray-900 dark:text-white', icon: '🔴' }
  ]

  const projectTasks = [
    { title: 'Two Sum (Easy)', date: 'Solved Dec 24, 2024', icon: '🟢', color: 'bg-green-100 text-green-600' },
    { title: 'Add Two Numbers (Medium)', date: 'Solved Dec 24, 2024', icon: '🟡', color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Longest Substring (Medium)', date: 'Solved Dec 25, 2024', icon: '🟡', color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Regular Expression (Hard)', date: 'Attempted Dec 26, 2024', icon: '🔴', color: 'bg-red-100 text-red-600' },
    { title: 'Merge K Sorted Lists (Hard)', date: 'Next Challenge', icon: '🎯', color: 'bg-purple-100 text-purple-600' }
  ]

  const teamMembers = [
    { name: 'Alexandra Deff', role: 'Solved: Binary Tree Maximum Path Sum', status: 'Completed', avatar: 'AD' },
    { name: 'Edwin Adenike', role: 'Working on: Dynamic Programming Series', status: 'In Progress', avatar: 'EA' },
    { name: 'Isaac Oluwatemilorun', role: 'Next: Graph Algorithms Week', status: 'Pending', avatar: 'IO' },
    { name: 'David Oshodi', role: 'Working on: System Design Problems', status: 'In Progress', avatar: 'DO' }
  ]

  const chartData = [
    { day: 'M', value: 20 },
    { day: 'T', value: 85 },
    { day: 'W', value: 60 },
    { day: 'T', value: 95 },
    { day: 'F', value: 40 },
    { day: 'S', value: 55 },
    { day: 'S', value: 70 }
  ]

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">LeetCode Challenge</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Track your daily coding progress and compete with friends.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const isWhiteCard = stat.color.includes('bg-white')
          return (
            <div key={index} className={`${stat.color} ${stat.textColor || 'text-white'} p-6 rounded-2xl relative overflow-hidden shadow-sm`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`font-medium text-sm ${isWhiteCard ? 'opacity-70 dark:opacity-80' : 'opacity-90'}`}>{stat.title}</h3>
                <button className={`opacity-70 hover:opacity-100 w-8 h-8 rounded-full flex items-center justify-center ${
                  isWhiteCard 
                    ? 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600' 
                    : 'bg-white bg-opacity-10 hover:bg-opacity-20'
                }`}>
                  <span className="text-sm">↗</span>
                </button>
              </div>
              <div className="text-4xl font-bold mb-3">{stat.value}</div>
              <div className="flex items-center text-sm opacity-80">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-2 ${
                  isWhiteCard 
                    ? 'bg-gray-200 dark:bg-gray-700' 
                    : 'bg-white bg-opacity-20'
                }`}>
                  <span className="text-xs">📈</span>
                </div>
                <span className="text-xs">{stat.change}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Overall />
        <DifficultyDistribution />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopicProgress />
        <LanguageUsage />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <YearlyContribution />
        <SolveTime />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Reminders */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Today's Challenge</h3>
          </div>
          <div className="space-y-4">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Median of Two Sorted Arrays</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Difficulty: Hard • Time Limit: 45 mins</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Start Challenge</span>
              </button>
            </div>
          </div>
        </div>

        {/* Project Progress */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Challenge Progress</h3>
          </div>
          <div className="text-center mb-6">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  className="text-gray-200 dark:text-gray-600"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.41)}`}
                  className="text-green-600"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">41%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Monthly Goal Progress</p>
          </div>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400">In Progress</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400">Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Team Collaboration */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Challenge Participants</h3>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center space-x-1">
              <span>+</span>
              <span>Add Participant</span>
            </button>
          </div>
          <div className="space-y-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  {member.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">{member.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  member.status === 'Completed' ? 'bg-green-100 text-green-600' :
                  member.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {member.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Time Tracker */}
        <div className="bg-gradient-to-br from-green-800 to-green-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-6">Coding Timer</h3>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold mb-2">{formatTime(currentTime)}</div>
            <div className="flex items-center justify-center space-x-4">
              <button className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                <span className="text-xl">⏸️</span>
              </button>
              <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <span className="text-xl">⏹️</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Tasks */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Problems</h3>
          <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center space-x-1">
            <span>+</span>
            <span>New</span>
          </button>
        </div>
        <div className="space-y-3">
          {projectTasks.map((task, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
              <div className={`w-10 h-10 ${task.color} rounded-lg flex items-center justify-center`}>
                <span className="text-lg">{task.icon}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white">{task.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{task.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
