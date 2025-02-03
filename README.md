# QuickPoll

QuickPoll is a modern, responsive web application for creating and managing polls. Built with React and styled with Tailwind CSS, it provides an intuitive interface for creating polls, collecting votes, and viewing results in real-time.

## Features

- **Create Polls**: Create custom polls with up to 8 options
- **Real-time Results**: View poll results with visual progress bars and percentage breakdowns
- **Shareable Links**: Each poll gets a unique, shareable link
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive UI**: Modern interface with smooth transitions and animations
- **Poll Management**: View, vote, and delete polls easily
- **Results Dashboard**: Detailed results view for each poll

## Project Structure

```
src/
├── components/ # React components
│ ├── Home.jsx # Landing page
│ ├── Navigation.jsx # Navigation bar
│ ├── PollCreate.jsx # Poll creation form
│ ├── PollList.jsx # List of all polls
│ ├── PollVote.jsx # Voting interface
│ ├── PollResults.jsx # Results display
│ ├── PollSuccess.jsx # Success page after poll creation
│ └── ConfirmModal.jsx # Reusable confirmation modal
├── services/ # Business logic and data handling
│ └── pollService.js # Poll data management
└── App.jsx # Main application component
```

## Components

- **Home**: Landing page with poll count and main navigation options
- **Navigation**: Top navigation bar with app title and create poll button
- **PollCreate**: Form for creating new polls with dynamic option fields
- **PollList**: Displays all polls with voting statistics and management options
- **PollVote**: Interface for voting on a specific poll
- **PollResults**: Detailed results view with vote counts and percentages
- **PollSuccess**: Success page after poll creation with sharing options
- **ConfirmModal**: Reusable confirmation dialog with blur effect

## Technologies Used

- **React**: Frontend framework
- **React Router**: Navigation and routing
- **Tailwind CSS**: Styling and UI components
- **LocalStorage**: Data persistence
- **Modern JavaScript**: ES6+ features

## Key Features in Detail

### Poll Creation
- Dynamic form with ability to add/remove options
- Maximum 8 options per poll
- Required fields validation
- Success page with shareable link

### Poll Management
- View all polls at a glance
- Delete polls with confirmation
- Real-time vote counting
- Progress bar visualization

### User Interface
- Clean, modern design
- Responsive layout
- Interactive elements
- Loading states
- Error handling
- Confirmation modals
- Blur effects for modals

### Data Visualization
- Progress bars for vote distribution
- Percentage calculations
- Total vote counting
- Real-time updates

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser

## Usage

1. **Creating a Poll**
   - Click "Create Poll" in the navigation
   - Enter your question
   - Add options (up to 8)
   - Submit to create the poll

2. **Voting**
   - Click "Vote" on any poll
   - Select an option
   - Submit your vote
   - View results immediately

3. **Viewing Results**
   - Click "Detailed Results" on any poll
   - See vote distribution
   - View total votes and percentages

4. **Managing Polls**
   - View all polls on the main page
   - Delete polls using the delete button
   - Share polls using the success page link

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
