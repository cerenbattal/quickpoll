import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPollById } from '../services/pollService'

function PollResults() {
  const [poll, setPoll] = useState(null)
  const { pollId } = useParams()

  useEffect(() => {
    const foundPoll = getPollById(pollId)
    if (foundPoll) {
      setPoll(foundPoll)
    }
  }, [pollId])

  if (!poll) return <div>Poll not found</div>

  const totalVotes = poll.votes.reduce((sum, count) => sum + count, 0)

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
        <div className="space-y-6">
          {poll.options.map((option, index) => {
            const percentage = totalVotes === 0 
              ? 0 
              : (poll.votes[index] / totalVotes) * 100
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-900">{option}</span>
                  <span className="text-gray-500">{poll.votes[index]} votes ({percentage.toFixed(1)}%)</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-6 text-center text-sm font-medium text-gray-500">
          Total votes: {totalVotes}
        </div>
      </div>
    </div>
  )
}

export default PollResults