import {useState} from "react";

export default function ConceptCard({concept, definition}) {
    const [isClicked, setIsClicked] = useState(false);

    const cardStyle = isClicked ? "concept-card-content flip" : "concept-card-content";

    const handleCardClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className={"concept-card-container"} onClick={handleCardClick}>
            <div className={cardStyle}>
                <div className={"concept-card-front"}>
                    <span>{concept}</span>
                </div>
                <div className={"concept-card-back"}>
                    <p className={"cut-long-text"}>{definition}</p>
                </div>
            </div>
        </div>
    )
}