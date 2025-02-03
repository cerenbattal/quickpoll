import { Link } from 'react-router-dom'
import { getPolls } from '../services/pollService'

function Home() {
  const pollCount = getPolls().length

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-8">
        Welcome to QuickPoll
      </h1>
      <p className="text-xl text-gray-600 mb-6">
        Create, share, and analyze polls in real-time. Get instant feedback from your audience.
      </p>
      
      <div className="bg-indigo-50 rounded-lg p-4 mb-12 inline-block">
        <p className="text-indigo-800 font-medium">
          Currently hosting {pollCount} {pollCount === 1 ? 'poll' : 'polls'}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Create Polls</h2>
          <p className="text-gray-600 mb-6">
            Create custom polls with multiple options and share them instantly.
          </p>
          <Link
            to="/create"
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Create a Poll
          </Link>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">View Results</h2>
          <p className="text-gray-600 mb-6">
            See real-time results and analytics for all your polls.
          </p>
          <Link
            to="/polls"
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            View Polls
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home 