import { useState } from 'react'

const WantToJoin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    leetcodeUsername: '',
    experience: '',
    languages: '',
    motivation: ''
  })

  const [submitted, setSubmitted] = useState(false)

  // Sample existing applications data
  const [applications] = useState([
    {
      id: 1,
      name: 'John Smith',
      leetcodeUsername: 'johnsmith123',
      experience: 'intermediate',
      status: 'Approved',
      languages: 'Python, JavaScript',
      appliedDate: '3/1/2024',
      motivation: 'Looking to improve my problem-solving skills and collaborate with others.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      leetcodeUsername: 'sarahcodes',
      experience: 'advanced',
      status: 'Under Review',
      languages: 'Java, C++',
      appliedDate: '3/5/2024',
      motivation: 'Want to prepare for technical interviews and learn from peers.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      leetcodeUsername: 'mchendev',
      experience: 'expert',
      status: 'Approved',
      languages: 'Python, Go, TypeScript',
      appliedDate: '2/28/2024',
      motivation: 'Interested in competitive programming and mentoring others.'
    }
  ])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
          <div className="text-green-500 text-5xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Request Submitted!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Thank you for your interest in joining the LeetCode Challenge. We'll review your application and get back to you soon.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Join Form Section */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Join the Challenge</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-center">
            Fill out the form below to request participation in the LeetCode Challenge.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="leetcodeUsername" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  LeetCode Username
                </label>
                <input
                  type="text"
                  id="leetcodeUsername"
                  name="leetcodeUsername"
                  value={formData.leetcodeUsername}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your LeetCode username"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Coding Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3-5 years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>

              <div>
                <label htmlFor="languages" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Languages
                </label>
                <input
                  type="text"
                  id="languages"
                  name="languages"
                  value={formData.languages}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="e.g., Python, JavaScript"
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Why do you want to join?
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Tell us why you'd like to join the challenge..."
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        {/* Recent Applications Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recent Applications</h2>
          <div className="space-y-4">
            {applications.map((application) => (
              <div key={application.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{application.name}</h3>
                    <span className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full ${
                      application.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {application.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Username:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{application.leetcodeUsername}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Languages:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{application.languages}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Experience:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{application.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Applied:</span>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">{application.appliedDate}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">Motivation:</span>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">{application.motivation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WantToJoin