# Memory Game 🧠🎮

A fun and interactive memory game built with React and Vite. Test your memory by clicking on different images without repeating any card!

## 🎯 Game Objective

The goal is simple: click on each image only once! The game shuffles the cards after each click, making it challenging to remember which cards you've already selected. Try to get the highest score possible!

## ✨ Features

- **Dynamic Card Shuffling**: Cards are randomly shuffled after each click
- **Score Tracking**: Keep track of your current score and best score
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern gradient backgrounds with smooth animations
- **Random Images**: Uses the Picsum API to fetch random beautiful images
- **Interactive Cards**: Hover effects and smooth transitions for better UX



## 🛠️ Technologies Used

- **React** - Frontend library for building user interfaces
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with gradients, flexbox, and animations
- **Picsum API** - For fetching random images
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohamedTel18/Memory-Game.git
   cd Memory-Game
   ```

2. **Navigate to the app directory**
   ```bash
   cd app
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to play the game!

## 🎮 How to Play

1. **Start the Game**: The game loads with 8 random image cards
2. **Click a Card**: Click on any card to start playing
3. **Remember**: Try to remember which cards you've already clicked
4. **Don't Repeat**: Avoid clicking the same card twice
5. **Beat Your Score**: Try to click all 8 cards without repeating to get the perfect score!

### Game Rules
- ✅ **Correct Click**: Click a new card → Score increases, cards shuffle
- ❌ **Wrong Click**: Click a previously selected card → Game over, score resets
- 🏆 **Perfect Game**: Click all 8 cards without repeating → Maximum score!

## 📁 Project Structure

```
Memory-Game/
├── app/
│   ├── public/
│   ├── src/
│   │   ├── component/
│   │   │   └── card.jsx          # Card component
│   │   ├── styles/
│   │   │   ├── index.css         # Main app styles
│   │   │   └── card.css          # Card-specific styles
│   │   ├── App.jsx               # Main app component
│   │   └── main.jsx              # App entry point
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── README.md
```

## 🎨 Features Breakdown

### UI/UX Features
- **Modern Design**: Beautiful gradient backgrounds and glass-morphism effects
- **Responsive Layout**: Horizontal card layout that adapts to all screen sizes
- **Smooth Animations**: Hover effects, transforms, and transitions
- **Mobile Optimized**: Touch-friendly with horizontal scrolling on mobile

### Game Features
- **Random Shuffling**: Fisher-Yates shuffle algorithm for fair randomization
- **Score Management**: Real-time score tracking with best score persistence
- **Image Loading**: Dynamic image fetching from Picsum API
- **Game State**: Proper state management for game logic

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Components

#### App.jsx
- Main game logic and state management
- Handles card clicks and score calculation
- Manages game flow and API calls

#### Card.jsx
- Individual card component
- Displays image and author name
- Handles click events

### CSS Architecture
- **Global Styles**: Reset, typography, and layout in `index.css`
- **Component Styles**: Card-specific styling in `card.css`
- **Responsive Design**: Mobile-first approach with breakpoints

## 🎯 Future Enhancements

- [ ] **Difficulty Levels**: Easy (6 cards), Medium (8 cards), Hard (12 cards)
- [ ] **Timer Mode**: Add countdown timer for extra challenge
- [ ] **Categories**: Different image categories (nature, animals, cities)
- [ ] **Sound Effects**: Audio feedback for clicks and game events
- [ ] **Animations**: Card flip animations and win celebrations
- [ ] **Leaderboard**: Local storage for multiple high scores
- [ ] **Dark Mode**: Toggle between light and dark themes

## 🐛 Known Issues

- Images may take time to load on slower connections
- Game state is reset on page refresh


## 🙏 Acknowledgments

- **Picsum Photos** - For providing beautiful random images
- **React Team** - For the amazing React library
- **Vite Team** - For the lightning-fast build tool
- **The Odin Project** - For project inspiration


**Enjoy playing the Memory Game! 🎮🧠**