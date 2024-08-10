export default function Error({message}) {
    return (
        <span className={"error client-msg"}>
            {message}
        </span>
    )
}