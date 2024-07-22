import ConceptCard from "./ConceptCard.jsx";

export default function ConceptCardsContainer({cards}) {
    return (
        <section className={"concept-cards-section"}>
            <h3 className={"container-label-h3"}>Cards</h3>
            <div className="concept-cards-container container">
                {cards && cards.map((card) => (<ConceptCard key={card.id} concept={card.concept} definition={card.definition}/>))}
            </div>
        </section>
    )
}