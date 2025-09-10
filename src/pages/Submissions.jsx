import { useState } from 'react'

const Submissions = () => {
  const [submissions] = useState([
    {
      id: 1,
      title: 'Two Sum',
      submittedBy: 'Alexandra Deff',
      submittedDate: '2024-12-20',
      status: 'Accepted',
      type: 'Easy',
      runtime: '56ms',
      memory: '42.3 MB',
      language: 'Python3',
      description: 'Used hash map to find complement in O(n) time complexity'
    },
    {
      id: 2,
      title: 'Add Two Numbers',
      submittedBy: 'Edwin Adenike',
      submittedDate: '2024-12-18',
      status: 'Wrong Answer',
      type: 'Medium',
      runtime: '89ms',
      memory: '45.1 MB',
      language: 'JavaScript',
      description: 'Linked list manipulation with carry handling'
    },
    {
      id: 3,
      title: 'Longest Substring Without Repeating Characters',
      submittedBy: 'Isaac Oluwatemilorun',
      submittedDate: '2024-12-15',
      status: 'Time Limit Exceeded',
      type: 'Medium',
      runtime: '145ms',
      memory: '48.2 MB',
      language: 'Java',
      description: 'Sliding window approach with character frequency tracking'
    },
    {
      id: 4,
      title: 'Regular Expression Matching',
      submittedBy: 'David Oshodi',
      submittedDate: '2024-12-12',
      status: 'Accepted',
      type: 'Hard',
      runtime: '32ms',
      memory: '40.1 MB',
      language: 'C++',
      description: 'Dynamic programming solution with pattern matching'
    },
    {
      id: 5,
      title: 'Median of Two Sorted Arrays',
      submittedBy: 'Charlie Kim',
      submittedDate: '2024-12-10',
      status: 'Runtime Error',
      type: 'Hard',
      runtime: '102ms',
      memory: '51.4 MB',
      language: 'Python3',
      description: 'Binary search approach for O(log(m+n)) complexity'
    }
  ])

  const [filterStatus, setFilterStatus] = useState('All')
  const [filterType, setFilterType] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = submission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.submittedBy.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'All' || submission.status === filterStatus
    const matchesType = filterType === 'All' || submission.type === filterType
    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800'
      case 'Completed': return 'bg-blue-100 text-blue-800'
      case 'Under Review': return 'bg-yellow-100 text-yellow-800'
      case 'In Progress': return 'bg-purple-100 text-purple-800'
      case 'Rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600'
      case 'Medium': return 'text-yellow-600'
      case 'Low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Problem Submissions</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Track your LeetCode problem solutions and performance.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Submissions</h3>
            <span className="text-2xl">📊</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{submissions.length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Accepted</h3>
            <span className="text-2xl">✅</span>
          </div>
          <div className="text-2xl font-bold text-green-600">{submissions.filter(s => s.status === 'Accepted').length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Wrong Answers</h3>
            <span className="text-2xl">❌</span>
          </div>
          <div className="text-2xl font-bold text-yellow-600">{submissions.filter(s => s.status === 'Wrong Answer').length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Runtime Errors</h3>
            <span className="text-2xl">⚠️</span>
          </div>
          <div className="text-2xl font-bold text-purple-600">{submissions.filter(s => s.status === 'Runtime Error').length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Time Limit Exceeded</h3>
            <span className="text-2xl">⏱️</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">{submissions.filter(s => s.status === 'Time Limit Exceeded').length}</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          >
            <option value="All">All Status</option>
            <option value="Accepted">Accepted</option>
            <option value="Wrong Answer">Wrong Answer</option>
            <option value="Runtime Error">Runtime Error</option>
            <option value="Time Limit Exceeded">Time Limit Exceeded</option>
          </select>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          >
            <option value="All">All Types</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
      </div>

      {/* Submissions List */}
      <div className="space-y-4">
        {filteredSubmissions.map((submission) => (
          <div key={submission.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{submission.title}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(submission.status)}`}>
                    {submission.status}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">#{submission.id}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">{submission.description}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <span>👤</span>
                    <span>{submission.submittedBy}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>{new Date(submission.submittedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>⚙️</span>
                    <span>{submission.runtime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>💾</span>
                    <span>{submission.memory}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>💻</span>
                    <span>{submission.language}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📊</span>
                    <span className={`font-medium ${
                      submission.type === 'Easy' ? 'text-green-600' :
                      submission.type === 'Medium' ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>{submission.type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Submissions
