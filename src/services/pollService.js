const POLLS_STORAGE_KEY = 'polls';

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const getPolls = () => {
  const polls = localStorage.getItem(POLLS_STORAGE_KEY);
  return polls ? JSON.parse(polls) : [];
};

export const getPollById = (id) => {
  const polls = getPolls();
  return polls.find(poll => poll.id === id);
};

export const createPoll = (poll) => {
  const polls = getPolls();
  const newPoll = {
    ...poll,
    id: generateId(),
    votes: Array(poll.options.length).fill(0),
    createdAt: new Date().toISOString()
  };
  polls.push(newPoll);
  localStorage.setItem(POLLS_STORAGE_KEY, JSON.stringify(polls));
  return newPoll;
};

export const votePoll = (pollId, optionIndex) => {
  const polls = getPolls();
  const poll = polls.find(p => p.id === pollId);
  if (poll) {
    poll.votes[optionIndex]++;
    localStorage.setItem(POLLS_STORAGE_KEY, JSON.stringify(polls));
  }
  return poll;
};

export const deletePoll = (pollId) => {
  const polls = JSON.parse(localStorage.getItem('polls') || '[]')
  const updatedPolls = polls.filter(poll => poll.id !== pollId)
  localStorage.setItem('polls', JSON.stringify(updatedPolls))
}