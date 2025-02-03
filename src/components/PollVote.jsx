import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getPollById, votePoll } from '../services/pollService'

function PollVote() {
  const [poll, setPoll] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)
  const { pollId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const foundPoll = getPollById(pollId)
    if (foundPoll) {
      setPoll(foundPoll)
    }
  }, [pollId])

  const handleVote = () => {
    if (selectedOption === null) return

    votePoll(pollId, selectedOption)
    navigate(`/results/${pollId}`)
  }

  if (!poll) return <div>Poll not found</div>

  return (
    <div className="max-w-lg mx-auto">
      <Link 
        to="/polls" 
        className="inline-flex items-center mb-6 text-sm text-gray-600 hover:text-gray-900"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Polls
      </Link>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">{poll.question}</h1>
        <div className="space-y-3">
          {poll.options.map((option, index) => (
            <label
              key={index}
              className={`block p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors ${
                selectedOption === index ? 'border-indigo-500 bg-indigo-50 hover:bg-indigo-50' : 'border-gray-200'
              }`}
            >
              <input
                type="radio"
                name="poll-option"
                className="mr-3 text-indigo-600 focus:ring-indigo-500"
                onChange={() => setSelectedOption(index)}
              />
              {option}
            </label>
          ))}
        </div>
        <button
          onClick={handleVote}
          disabled={selectedOption === null}
          className="w-full mt-6 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Vote
        </button>
      </div>
    </div>
  )
}

export default PollVote