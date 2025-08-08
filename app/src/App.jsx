import { useState,useEffect } from 'react'
import Card from './component/card'
import './styles/index.css'

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect ( () =>{
      const fetchCards = async () => {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=8');
        const data = await response.json();
        
        setCards(data);
      }

      fetchCards();
  }, []);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      if(score > bestScore) {
        setBestScore(score);
      }

      alert("You already clicked this card! Game Over. Your score is " + score);
      setClickedCards([]);
      setScore(0);

    } else {
      setClickedCards([...clickedCards, id]);
      setScore(score + 1);

      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
    }

    setCards(shuffleArray(cards));
  }

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="app">
      <header>
        <h1>Memory Game</h1>
        <div className="score-board">
          <p>Score: {score}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </header>
      <main>
        <div className="card-container">
          {cards.map(card => (
            <Card 
              key={card.id} 
              id={card.id} 
              name={card.author} 
              image={card.download_url} 
              onHandleClick={handleCardClick} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}