import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPoll } from '../services/pollService'

function PollCreate() {
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState(['', ''])
  const navigate = useNavigate()
  const MAX_OPTIONS = 8

  const handleAddOption = () => {
    if (options.length >= MAX_OPTIONS) return
    setOptions([...options, ''])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const poll = createPoll({
      question,
      options: options.filter(opt => opt.trim() !== '')
    })
    
    navigate(`/poll/${poll.id}/success`)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">Create a New Poll</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-24 resize-none"
            required
            placeholder="Enter your poll question here..."
          />
        </div>
        
        {options.map((option, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Option {index + 1}
            </label>
            <textarea
              value={option}
              onChange={(e) => {
                const newOptions = [...options]
                newOptions[index] = e.target.value
                setOptions(newOptions)
              }}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-16 resize-none"
              required
              placeholder={`Enter option ${index + 1}...`}
            />
          </div>
        ))}
        
        <button
          type="button"
          onClick={handleAddOption}
          disabled={options.length >= MAX_OPTIONS}
          className="mb-6 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          + Add Option {options.length >= MAX_OPTIONS && '(Max reached)'}
        </button>
        
        <button type="submit" className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
          Create Poll
        </button>
      </form>
    </div>
  )
}

export default PollCreate