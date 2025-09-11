import { useState, useEffect } from 'react'
import axios from 'axios'

const Submissions = () => {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch submissions from API
  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setLoading(true)
        const response = await axios.get('http://localhost:3000/submission')
        setSubmissions(response.data.data)
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch submissions')
        console.error('Error fetching submissions:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchSubmissions()
  }, [])

  const [filterStatus, setFilterStatus] = useState('All')
  const [filterType, setFilterType] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = submission.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         submission.userName.toLowerCase().includes(searchTerm.toLowerCase())
    // For now, we'll assume all submissions are "Accepted" since the API doesn't provide status
    const matchesStatus = filterStatus === 'All' || filterStatus === 'Accepted'
    const matchesType = filterType === 'All' || submission.difficulty === filterType
    return matchesSearch && matchesStatus && matchesType
  })


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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Submissions</h3>
            <span className="text-2xl">📊</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{submissions.length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Easy Problems</h3>
            <span className="text-2xl">🟢</span>
          </div>
          <div className="text-2xl font-bold text-green-600">{submissions.filter(s => s.difficulty === 'Easy').length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Medium Problems</h3>
            <span className="text-2xl">🟡</span>
          </div>
          <div className="text-2xl font-bold text-yellow-600">{submissions.filter(s => s.difficulty === 'Medium').length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Hard Problems</h3>
            <span className="text-2xl">🔴</span>
          </div>
          <div className="text-2xl font-bold text-red-600">{submissions.filter(s => s.difficulty === 'Hard').length}</div>
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

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          <span className="ml-3 text-gray-600 dark:text-gray-400">Loading submissions...</span>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
          <div className="flex items-center">
            <span className="text-2xl mr-3">⚠️</span>
            <div>
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-200">Error Loading Submissions</h3>
              <p className="text-red-600 dark:text-red-300 mt-1">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Submissions List */}
      {!loading && !error && (
        <div className="space-y-4">
          {filteredSubmissions.length === 0 ? (
            <div className="text-center p-8 text-gray-500 dark:text-gray-400">
              <span className="text-4xl mb-4 block">📝</span>
              <h3 className="text-lg font-medium mb-2">No submissions found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            filteredSubmissions.map((submission) => (
              <div key={submission._id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <a 
                        href={`https://leetcode.com/problems/${submission.titleSlug}/submissions/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <span>{submission.title}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Accepted
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">#{submission._id.slice(-8)}</span>
                    </div>
                    
                    {/* Topic Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {submission.topicTags.map((tag, index) => (
                        <span key={index} className="inline-flex px-2 py-1 text-xs font-medium rounded-md bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <span>👤</span>
                        <span>{submission.userName}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>🏆</span>
                        <span>{submission.seasonName}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>📅</span>
                        <span>{new Date(submission.submittedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>💻</span>
                        <span className="capitalize">{submission.language}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>📊</span>
                        <span className={`font-medium ${
                          submission.difficulty === 'Easy' ? 'text-green-600' :
                          submission.difficulty === 'Medium' ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>{submission.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default Submissions
