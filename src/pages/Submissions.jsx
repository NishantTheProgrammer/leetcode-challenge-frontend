import { useState } from 'react'

const Submissions = () => {
  const [submissions] = useState([
    {
      id: 1,
      title: 'GitHub Project Repository Integration',
      submittedBy: 'Alexandra Deff',
      submittedDate: '2024-11-20',
      status: 'Approved',
      type: 'Feature',
      priority: 'High',
      description: 'Integration with GitHub API for project repository management'
    },
    {
      id: 2,
      title: 'User Authentication System',
      submittedBy: 'Edwin Adenike',
      submittedDate: '2024-11-18',
      status: 'Under Review',
      type: 'Feature',
      priority: 'High',
      description: 'Complete user authentication and authorization system'
    },
    {
      id: 3,
      title: 'Checkout Filter Functionality',
      submittedBy: 'Isaac Oluwatemilorun',
      submittedDate: '2024-11-15',
      status: 'In Progress',
      type: 'Enhancement',
      priority: 'Medium',
      description: 'Advanced filtering options for checkout process'
    },
    {
      id: 4,
      title: 'Responsive Layout for Homepage',
      submittedBy: 'David Oshodi',
      submittedDate: '2024-11-12',
      status: 'Completed',
      type: 'Bug Fix',
      priority: 'Low',
      description: 'Fix responsive design issues on homepage'
    },
    {
      id: 5,
      title: 'API Performance Optimization',
      submittedBy: 'Totok Michael',
      submittedDate: '2024-11-10',
      status: 'Rejected',
      type: 'Enhancement',
      priority: 'Medium',
      description: 'Optimize API response times and database queries'
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
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Submissions</h1>
          <p className="text-gray-600 mt-1">Review and manage project submissions.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2">
            <span>+</span>
            <span>New Submission</span>
          </button>
          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total</h3>
            <span className="text-2xl">📝</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{submissions.length}</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Approved</h3>
            <span className="text-2xl">✅</span>
          </div>
          <div className="text-2xl font-bold text-green-600">{submissions.filter(s => s.status === 'Approved').length}</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Under Review</h3>
            <span className="text-2xl">⏳</span>
          </div>
          <div className="text-2xl font-bold text-yellow-600">{submissions.filter(s => s.status === 'Under Review').length}</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">In Progress</h3>
            <span className="text-2xl">🔄</span>
          </div>
          <div className="text-2xl font-bold text-purple-600">{submissions.filter(s => s.status === 'In Progress').length}</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Completed</h3>
            <span className="text-2xl">🎉</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">{submissions.filter(s => s.status === 'Completed').length}</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search submissions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="All">All Status</option>
            <option value="Approved">Approved</option>
            <option value="Under Review">Under Review</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Rejected">Rejected</option>
          </select>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="All">All Types</option>
            <option value="Feature">Feature</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Bug Fix">Bug Fix</option>
          </select>
        </div>
      </div>

      {/* Submissions List */}
      <div className="space-y-4">
        {filteredSubmissions.map((submission) => (
          <div key={submission.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{submission.title}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(submission.status)}`}>
                    {submission.status}
                  </span>
                  <span className="text-sm text-gray-500">#{submission.id}</span>
                </div>
                <p className="text-gray-600 mb-3">{submission.description}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <span>👤</span>
                    <span>{submission.submittedBy}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📅</span>
                    <span>{new Date(submission.submittedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>🏷️</span>
                    <span>{submission.type}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>⚡</span>
                    <span className={getPriorityColor(submission.priority)}>{submission.priority}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <button className="px-3 py-1 text-sm font-medium text-green-600 hover:text-green-700 border border-green-300 rounded-lg hover:bg-green-50">
                  Review
                </button>
                <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Submissions
