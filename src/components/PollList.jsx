import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPolls, deletePoll } from '../services/pollService'
import ConfirmModal from './ConfirmModal'

function PollList() {
  const [polls, setPolls] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pollToDelete, setPollToDelete] = useState(null)

  useEffect(() => {
    setPolls(getPolls())
  }, [])

  const handleDeleteClick = (pollId) => {
    setPollToDelete(pollId)
    setIsModalOpen(true)
  }

  const handleConfirmDelete = () => {
    if (pollToDelete) {
      deletePoll(pollToDelete)
      setPolls(getPolls())
      setIsModalOpen(false)
      setPollToDelete(null)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setPollToDelete(null)
  }

  const calculatePercentage = (votes, index) => {
    const totalVotes = votes.reduce((sum, count) => sum + count, 0)
    return totalVotes === 0 ? 0 : (votes[index] / totalVotes) * 100
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Active Polls</h1>
        <Link to="/create" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
          Create Poll
        </Link>
      </div>
      
      <div className="space-y-6">
        {polls.map(poll => (
          <div key={poll.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{poll.question}</h2>
              <button
                onClick={() => handleDeleteClick(poll.id)}
                className="text-red-600 hover:text-red-700 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="space-y-3 mb-4">
              {poll.options.map((option, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-900">{option}</span>
                    <span className="text-gray-500">
                      {poll.votes[index]} votes ({calculatePercentage(poll.votes, index).toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${calculatePercentage(poll.votes, index)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4">
              <Link to={`/poll/${poll.id}`} className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                Vote
              </Link>
              <Link to={`/results/${poll.id}`} className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                Detailed Results
              </Link>
            </div>
          </div>
        ))}
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
        title="Delete Poll"
        message="Are you sure you want to delete this poll? This action cannot be undone."
      />
    </div>
  )
}

export default PollList