import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-indigo-600 hover:text-indigo-700 transition-colors">
              QuickPoll
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/create" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
              Create Poll
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation