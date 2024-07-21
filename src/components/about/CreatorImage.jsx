export default function CreatorImage() {
    const imgSrc = "/images/vicetr3s.jpg";
    return (
        <section className={"creator-portrait-section"}>
            <figure>
                <img className={"creator-img"} alt="Creator portrait" src={imgSrc}/>
                <figcaption className={"creator-description"}>The <strong className={"accent-text"}>creator</strong> himself</figcaption>
            </figure>
        </section>
    )
}