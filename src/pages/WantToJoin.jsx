import { useState } from 'react'

const WantToJoin = () => {
  const [applications] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      position: 'Senior React Developer',
      experience: '5 years',
      appliedDate: '2024-11-18',
      status: 'Under Review',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
      portfolio: 'https://sarahjohnson.dev',
      message: 'I am passionate about building scalable web applications and would love to contribute to your team.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      position: 'UI/UX Designer',
      experience: '3 years',
      appliedDate: '2024-11-15',
      status: 'Approved',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      portfolio: 'https://michaelchen.design',
      message: 'I specialize in creating intuitive user experiences and have a strong background in design systems.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      position: 'Backend Developer',
      experience: '4 years',
      appliedDate: '2024-11-12',
      status: 'Interview Scheduled',
      skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      portfolio: 'https://github.com/emilyrodriguez',
      message: 'I have extensive experience in building robust APIs and database optimization.'
    },
    {
      id: 4,
      name: 'James Wilson',
      email: 'james.wilson@email.com',
      position: 'DevOps Engineer',
      experience: '6 years',
      appliedDate: '2024-11-10',
      status: 'Rejected',
      skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
      portfolio: 'https://jameswilson.tech',
      message: 'I am experienced in cloud infrastructure and automation, looking to help streamline your deployment processes.'
    },
    {
      id: 5,
      name: 'Lisa Park',
      email: 'lisa.park@email.com',
      position: 'Product Manager',
      experience: '7 years',
      appliedDate: '2024-11-08',
      status: 'Under Review',
      skills: ['Product Strategy', 'Agile', 'Data Analysis', 'User Research'],
      portfolio: 'https://lisapark.pm',
      message: 'I have a proven track record of launching successful products and leading cross-functional teams.'
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
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Want to Join</h1>
          <p className="text-gray-600 mt-1">Review job applications and manage candidates.</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2">
            <span>+</span>
            <span>Post Job</span>
          </button>
          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium">
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Total Applications</h3>
            <span className="text-2xl">📋</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{applications.length}</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Under Review</h3>
            <span className="text-2xl">⏳</span>
          </div>
          <div className="text-2xl font-bold text-yellow-600">{applications.filter(a => a.status === 'Under Review').length}</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Approved</h3>
            <span className="text-2xl">✅</span>
          </div>
          <div className="text-2xl font-bold text-green-600">{applications.filter(a => a.status === 'Approved').length}</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-600">Interviews</h3>
            <span className="text-2xl">🎯</span>
          </div>
          <div className="text-2xl font-bold text-blue-600">{applications.filter(a => a.status === 'Interview Scheduled').length}</div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
          <div key={application.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {application.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{application.name}</h3>
                    <p className="text-gray-600">{application.email}</p>
                  </div>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(application.status)}`}>
                    {application.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Position</h4>
                    <p className="text-gray-900">{application.position}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Experience</h4>
                    <p className="text-gray-900">{application.experience}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Applied Date</h4>
                    <p className="text-gray-900">{new Date(application.appliedDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Portfolio</h4>
                    <a href={application.portfolio} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                      View Portfolio
                    </a>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {application.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Message</h4>
                  <p className="text-gray-600 text-sm">{application.message}</p>
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
                <button className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300">
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
