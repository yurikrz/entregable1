import { useState } from 'react'
import './QuoteCard.css'
import Line from './Line.jsx'

function QuoteCard({quote, nextQuote}) {
    const [textLines, setTextLines] = useState([])
    

    // function setQuantityLines(){
    //     const qtyLines = Math.ceil(quote.phrase.length / 60)
    //     const qtyLettersPerLine = Math.ceil(quote.phrase.length / qtyLines)
    //     let startLetter = 0
    //     let endLetter = qtyLettersPerLine

    //     let intialDy ="-" + (Math.ceil(qtyLines/2-0.5))*20 + ""  
        
    //     for (let i=0; i < qtyLines ; i++){
    //         const newText= {text: quote.phrase.substring(startLetter,endLetter), dy:(i===0 ? intialDy : "20")}
            
    //         setTextLines( prevText => {
    //             return [...prevText, newText]
    //         })
            
    //         startLetter = endLetter 
    //         endLetter += qtyLettersPerLine
    //     }
        
    
    // }
    

    
    return (
        <section className="quoteCard">
            <article className="quoteCard__container">
                <h1 className="quoteCard__title">GALLETAS DE LA FORTUNA</h1>
                <div className='quoteCard__pharse'>{quote.phrase}</div> 
                <button className="quoteCard__btn" onClick={nextQuote}>Ver Otro</button>
                {/* <div className='quoteCard__img'></div> */}
            </article>
            <footer className="quoteCard__footer">
                Authors: {quote.author}
            </footer>
        </section>
    )
}

export default QuoteCard