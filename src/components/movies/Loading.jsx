import {SyncLoader} from "react-spinners";

export default function Loading({message}) {
    return (
        <div className={"loading client-msg"}>
            <span>{message}</span> <SyncLoader color={"var(--secondary-dk-clr)"} size={"0.7rem"}/>
        </div>
    )
}