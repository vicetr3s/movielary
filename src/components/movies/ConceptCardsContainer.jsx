import ConceptCard from "./ConceptCard.jsx";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";

export default function ConceptCardsContainer({cards, isLoading, isError}) {
    return (
        <section className={"concept-cards-section"}>
            <h3 className={"container-label-h3"}>Cards</h3>
            <div className="concept-cards-container container">
                {
                    isError ?  (
                        <Error message={"We couldn´t get your cards :("}/>
                    ) : (isLoading ? (
                        <Loading message={"Loading"}/>
                    ) : (
                        cards?.map((card) => (
                            <ConceptCard key={card.id} concept={card.concept} definition={card.definition}/>))
                    ))
                }
            </div>
        </section>
    )
}