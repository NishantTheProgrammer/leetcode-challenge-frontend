import { useState } from 'react'

const Users = () => {
  const [users] = useState([
    {
      id: 1,
      name: 'Alexandra Deff',
      email: 'alexandra@email.com',
      rank: 'Gold',
      status: 'Active',
      avatar: 'AD',
      joinDate: '2024-01-15',
      solved: {
        total: 145,
        easy: 52,
        medium: 78,
        hard: 15
      },
      streak: 15,
      languages: ['Python3', 'C++', 'JavaScript']
    },
    {
      id: 2,
      name: 'Edwin Adenike',
      email: 'edwin@email.com',
      rank: 'Silver',
      status: 'Active',
      avatar: 'EA',
      joinDate: '2024-02-10',
      solved: {
        total: 98,
        easy: 45,
        medium: 42,
        hard: 11
      },
      streak: 8,
      languages: ['JavaScript', 'TypeScript', 'Java']
    },
    {
      id: 3,
      name: 'Isaac Oluwatemilorun',
      email: 'isaac@email.com',
      rank: 'Bronze',
      status: 'Away',
      avatar: 'IO',
      joinDate: '2024-03-05',
      solved: {
        total: 67,
        easy: 35,
        medium: 28,
        hard: 4
      },
      streak: 3,
      languages: ['Java', 'Python3']
    },
    {
      id: 4,
      name: 'David Oshodi',
      email: 'david@email.com',
      rank: 'Silver',
      status: 'Active',
      avatar: 'DO',
      joinDate: '2024-01-20',
      solved: {
        total: 112,
        easy: 48,
        medium: 55,
        hard: 9
      },
      streak: 12,
      languages: ['C++', 'Python3']
    },
    {
      id: 5,
      name: 'Charlie Kim',
      email: 'charlie@email.com',
      rank: 'Platinum',
      status: 'Active',
      avatar: 'CK',
      joinDate: '2023-12-01',
      solved: {
        total: 287,
        easy: 89,
        medium: 156,
        hard: 42
      },
      streak: 45,
      languages: ['Java', 'C++', 'Python3', 'Go']
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'All' || user.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Participants</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">View rankings and progress of challenge participants.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Participants</h3>
            <span className="text-2xl">👨‍💻</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{users.length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Users</h3>
            <span className="text-2xl">✅</span>
          </div>
          <div className="text-2xl font-bold text-green-600">{users.filter(u => u.status === 'Active').length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Away Users</h3>
            <span className="text-2xl">⏰</span>
          </div>
          <div className="text-2xl font-bold text-orange-600">{users.filter(u => u.status === 'Away').length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Problems Solved</h3>
            <span className="text-2xl">🎯</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">{users.reduce((sum, u) => sum + u.solved.total, 0)}</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search participants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Away">Away</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Problems Solved</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Streak</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Projects</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Join Date</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {user.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${
                      user.rank === 'Platinum' ? 'text-purple-600' :
                      user.rank === 'Gold' ? 'text-yellow-600' :
                      user.rank === 'Silver' ? 'text-gray-500' :
                      'text-orange-600'
                    }`}>{user.rank}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {user.solved.total} ({user.solved.easy} / {user.solved.medium} / {user.solved.hard})
                    </div>
                    <div className="text-xs text-gray-500">Easy / Medium / Hard</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {user.streak} days 🔥
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {user.languages.join(', ')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Users
