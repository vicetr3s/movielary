export default function ExplanationCard({cardsAmount}) {
    return (
        <div className="explanation-card container">
            <p>
                In every <span className="accent-text">movie</span>, discover <span className="accent-text">learning</span> cards! Each card represents a word from the film. Learn its meaning
                with <span className="accent-text">Movielary</span>. Click a card after saying the word aloud to see if you got it right!
            </p>
            <strong>Cards amount: <span className="accent-text">{cardsAmount}</span></strong>
        </div>
)
}