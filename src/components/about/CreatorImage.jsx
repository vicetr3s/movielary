export default function CreatorImage() {
    const imgSrc = "src/assets/images/kuzco.webp";
    return (
        <section className={"creator-portrait-section"}>
            <figure>
                <img className={"creator-img"} alt="Creator portrait" src={imgSrc}/>
                <figcaption className={"creator-description"}>The <strong className={"accent-text"}>creator</strong> himself</figcaption>
            </figure>
        </section>
    )
}