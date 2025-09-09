import { useState, useEffect } from 'react'

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
    { title: 'Total Projects', value: '24', change: 'Increased from last month', color: 'bg-green-600', icon: '📊' },
    { title: 'Ended Projects', value: '10', change: 'Increased from last month', color: 'bg-white border border-gray-200', textColor: 'text-gray-900', icon: '✅' },
    { title: 'Running Projects', value: '12', change: 'Decreased from last month', color: 'bg-white border border-gray-200', textColor: 'text-gray-900', icon: '🏃' },
    { title: 'Pending Project', value: '2', change: 'On Discuss', color: 'bg-white border border-gray-200', textColor: 'text-gray-900', icon: '⏳' }
  ]

  const projectTasks = [
    { title: 'Develop API Endpoints', date: 'Dec date: Nov 24, 2024', icon: '⚡', color: 'bg-blue-100 text-blue-600' },
    { title: 'Onboarding Flow', date: 'Dec date: Nov 24, 2024', icon: '🔄', color: 'bg-green-100 text-green-600' },
    { title: 'Build Dashboard', date: 'Dec date: Nov 25, 2024', icon: '📊', color: 'bg-purple-100 text-purple-600' },
    { title: 'Optimize Page Load', date: 'Dec date: Nov 26, 2024', icon: '⚡', color: 'bg-yellow-100 text-yellow-600' },
    { title: 'Cross-Browser Testing', date: 'Dec date: Dec 4, 2024', icon: '🌐', color: 'bg-red-100 text-red-600' }
  ]

  const teamMembers = [
    { name: 'Alexandra Deff', role: 'Working on GitHub Project Repository', status: 'Completed', avatar: 'AD' },
    { name: 'Edwin Adenike', role: 'Working on Integrate User Authentication System', status: 'In Progress', avatar: 'EA' },
    { name: 'Isaac Oluwatemilorun', role: 'Working on Develop Checkout Filter Functionality', status: 'Pending', avatar: 'IO' },
    { name: 'David Oshodi', role: 'Working on Responsive Layout for Homepage', status: 'In Progress', avatar: 'DO' }
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
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Plan, prioritize, and accomplish your tasks with ease.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2">
            <span>+</span>
            <span>Add Project</span>
          </button>
          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Import Data
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.color} ${stat.textColor || 'text-white'} p-6 rounded-xl relative overflow-hidden`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium opacity-90">{stat.title}</h3>
              <button className="opacity-70 hover:opacity-100">
                <span className="text-lg">↗</span>
              </button>
            </div>
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="flex items-center text-sm opacity-75">
              <span className="mr-1">📈</span>
              <span>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Project Analytics Chart */}
        <div className="lg:col-span-1 bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Project Analytics</h3>
          <div className="flex items-end justify-between h-40 space-x-2">
            {chartData.map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                <div 
                  className={`w-full rounded-t-lg ${index === 3 ? 'bg-green-600' : index % 2 === 0 ? 'bg-gray-200' : 'bg-green-400'}`}
                  style={{ height: `${item.value}%` }}
                ></div>
                <span className="text-sm text-gray-600">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reminders */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Reminders</h3>
          </div>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Meeting with Arc Company</h4>
              <p className="text-sm text-gray-600 mb-3">Time: 02:00 pm - 04:00 pm</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Start Meeting</span>
              </button>
            </div>
          </div>
        </div>

        {/* Project Progress */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Project Progress</h3>
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
                  className="text-gray-200"
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
                <span className="text-3xl font-bold text-gray-900">41%</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">Project Ended</p>
          </div>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded-full"></div>
              <span className="text-gray-600">Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="text-gray-600">In Progress</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
              <span className="text-gray-600">Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Team Collaboration */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Team Collaboration</h3>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center space-x-1">
              <span>+</span>
              <span>Add Member</span>
            </button>
          </div>
          <div className="space-y-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                  {member.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.role}</p>
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
          <h3 className="text-lg font-semibold mb-6">Time Tracker</h3>
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
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Project</h3>
          <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center space-x-1">
            <span>+</span>
            <span>New</span>
          </button>
        </div>
        <div className="space-y-3">
          {projectTasks.map((task, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
              <div className={`w-10 h-10 ${task.color} rounded-lg flex items-center justify-center`}>
                <span className="text-lg">{task.icon}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{task.title}</h4>
                <p className="text-sm text-gray-600">{task.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
