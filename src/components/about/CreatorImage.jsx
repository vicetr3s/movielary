export default function CreatorImage() {
    return (
        <section className={"creator-portrait-section"}>
            <figure>
                <img className={"creator-img"} alt="Creator portrait" src={"/images/vicetr3s.jpg"} loading="lazy"/>
                <figcaption className={"creator-description"}>The <strong
                    className={"accent-text"}>creator</strong> himself
                </figcaption>
            </figure>
        </section>
    )
}