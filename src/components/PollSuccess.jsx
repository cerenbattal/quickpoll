import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPollById } from '../services/pollService'

function PollSuccess() {
  const [poll, setPoll] = useState(null)
  const [copied, setCopied] = useState(false)
  const { pollId } = useParams()

  useEffect(() => {
    const foundPoll = getPollById(pollId)
    if (foundPoll) {
      setPoll(foundPoll)
    }
  }, [pollId])

  const pollUrl = `${window.location.origin}/poll/${pollId}`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pollUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (!poll) return <div>Poll not found</div>

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Poll Created Successfully!</h2>
          <p className="text-gray-600">Share this poll with others to start collecting responses.</p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Poll Details</h3>
          <p className="text-gray-600 mb-4">{poll.question}</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Shareable Link
            </label>
            <div className="flex">
              <input
                type="text"
                readOnly
                value={pollUrl}
                className="block w-full rounded-l-md border-gray-300 bg-gray-50 sm:text-sm"
              />
              <button
                onClick={handleCopyLink}
                className={`inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white ${
                  copied ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors`}
              >
                {copied ? (
                  <>
                    <svg className="h-4 w-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    Copy Link
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex space-x-4">
            <Link
              to={`/poll/${pollId}`}
              className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              View Poll
            </Link>
            <Link
              to="/polls"
              className="flex-1 inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              View All Polls
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PollSuccess 