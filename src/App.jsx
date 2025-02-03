import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import PollCreate from './components/PollCreate'
import PollVote from './components/PollVote'
import PollResults from './components/PollResults'
import PollList from './components/PollList'
import PollSuccess from './components/PollSuccess'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/polls" element={<PollList />} />
            <Route path="/create" element={<PollCreate />} />
            <Route path="/poll/:pollId" element={<PollVote />} />
            <Route path="/poll/:pollId/success" element={<PollSuccess />} />
            <Route path="/results/:pollId" element={<PollResults />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App