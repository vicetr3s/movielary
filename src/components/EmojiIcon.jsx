export default function EmojiIcon({emoji, size}) {
    return (
        <>
            <span className={"emoji"} style={{fontSize: size}}>{emoji}</span>
        </>
    )
}