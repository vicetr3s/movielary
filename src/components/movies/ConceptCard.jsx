import {useState} from "react";

export default function ConceptCard({concept, definition}) {
    const [isClicked, setIsClicked] = useState(false);

    const cardText = isClicked ? definition : concept;
    const cardStyle = isClicked ? "concept-card open-card" : "concept-card";

    const handleCardClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <button className={cardStyle} onClick={handleCardClick}>
            {cardText}
        </button>
    )
}