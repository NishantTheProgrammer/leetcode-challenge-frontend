import { useState } from 'react'

const WantToJoin = () => {
  const [applications] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      experience: 'Intermediate',
      appliedDate: '2024-12-18',
      status: 'Under Review',
      preferredLanguages: ['Python3', 'JavaScript', 'Java'],
      leetcodeProfile: 'sarahj92',
      githubProfile: 'sarahjohnson',
      previousChallenges: ['Advent of Code 2023', 'Google Code Jam 2023'],
      message: 'I want to improve my problem-solving skills and join a community of dedicated programmers.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      experience: 'Advanced',
      appliedDate: '2024-12-15',
      status: 'Approved',
      preferredLanguages: ['C++', 'Python3'],
      leetcodeProfile: 'mchen_dev',
      githubProfile: 'michaelchen',
      previousChallenges: ['ICPC Regional 2023', 'Facebook Hacker Cup 2023'],
      message: 'Looking to participate in daily coding challenges and share knowledge with fellow participants.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      experience: 'Beginner',
      appliedDate: '2024-12-12',
      status: 'Interview Scheduled',
      preferredLanguages: ['JavaScript', 'TypeScript'],
      leetcodeProfile: 'emily_r',
      githubProfile: 'emilyrodriguez',
      previousChallenges: ['30 Days of Code'],
      message: 'Starting my journey in competitive programming and eager to learn from experienced developers.'
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james.wilson@email.com',
      experience: 'Advanced',
      appliedDate: '2024-12-10',
      status: 'Rejected',
      preferredLanguages: ['Java', 'Go', 'Python3'],
      leetcodeProfile: 'jwilson_dev',
      githubProfile: 'jameswilson',
      previousChallenges: ['Google Kickstart 2023', 'CodeForces Div 2'],
      message: 'Interested in tackling hard problems and improving my algorithmic thinking.'
    },
    {
      id: 5,
      name: 'Lisa Park',
      email: 'lisa.park@email.com',
      experience: 'Intermediate',
      appliedDate: '2024-12-08',
      status: 'Under Review',
      preferredLanguages: ['Python3', 'C++'],
      leetcodeProfile: 'lisa_codes',
      githubProfile: 'lisapark',
      previousChallenges: ['HackerRank Contests', 'Project Euler'],
      message: 'Looking to challenge myself with daily coding problems and collaborate with others.'
    }
  ])

  const [filterStatus, setFilterStatus] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'All' || app.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800'
      case 'Under Review': return 'bg-yellow-100 text-yellow-800'
      case 'Interview Scheduled': return 'bg-blue-100 text-blue-800'
      case 'Rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const handleStatusChange = (id, newStatus) => {
    // In a real app, this would update the backend
    console.log(`Changing status of application ${id} to ${newStatus}`)
  }

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Join Challenge</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Review and manage challenge participation requests.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2">
            <span>+</span>
            <span>Open Registration</span>
          </button>
          <button className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium">
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Requests</h3>
            <span className="text-2xl">🤝</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">{applications.length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Under Review</h3>
            <span className="text-2xl">⏳</span>
          </div>
          <div className="text-2xl font-bold text-yellow-600">{applications.filter(a => a.status === 'Under Review').length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Approved</h3>
            <span className="text-2xl">✅</span>
          </div>
          <div className="text-2xl font-bold text-green-600">{applications.filter(a => a.status === 'Approved').length}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">Interviews</h3>
            <span className="text-2xl">🎯</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">{applications.filter(a => a.status === 'Interview Scheduled').length}</div>
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
            <option value="Under Review">Under Review</option>
            <option value="Approved">Approved</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.map((application) => (
          <div key={application.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {application.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{application.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{application.email}</p>
                  </div>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(application.status)}`}>
                    {application.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Experience Level</h4>
                    <p className="text-gray-900 dark:text-white">{application.experience}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">LeetCode Profile</h4>
                    <a href={`https://leetcode.com/${application.leetcodeProfile}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                      {application.leetcodeProfile}
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">GitHub Profile</h4>
                    <a href={`https://github.com/${application.githubProfile}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      {application.githubProfile}
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Applied Date</h4>
                    <p className="text-gray-900 dark:text-white">{new Date(application.appliedDate).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Preferred Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {application.preferredLanguages.map((lang, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-4 mb-2">Previous Challenges</h4>
                  <div className="flex flex-wrap gap-2">
                    {application.previousChallenges.map((challenge, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{application.message}</p>
                </div>
              </div>

              <div className="flex flex-col space-y-2 ml-6">
                <button
                  onClick={() => handleStatusChange(application.id, 'Approved')}
                  className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleStatusChange(application.id, 'Interview Scheduled')}
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700"
                >
                  Interview
                </button>
                <button
                  onClick={() => handleStatusChange(application.id, 'Rejected')}
                  className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700"
                >
                  Reject
                </button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WantToJoin
