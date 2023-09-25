import { useState } from 'react'
import './App.css'
import getRandomElement from './utilis/random.js'
import quotes from './bd/quotes.json'
import QuoteCard from './components/QuoteCard'
const backgrounds = ["bg1","bg2","bg3","bg4",]

function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes))
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds))

  function nextQuote(){
      setQuote(getRandomElement(quotes))
      setCurrentBg(getRandomElement(backgrounds))
  }

  return (
    <main className={`app ${currentBg}`}>
      <QuoteCard quote={quote} nextQuote ={nextQuote} />
    </main>
  )
}

export default App
