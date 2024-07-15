import React from "react";
import EmojiIcon from "./EmojiIcon";

export default function PageTitle() {
    return (
        <section className="page-title">
            <div>
                <EmojiIcon emoji={"🎥"} size={70}/>
                <h1>MOVIELARY</h1>
                <EmojiIcon emoji={"📖"} size={70}/>
            </div>
            <span>Learn vocabulary from movies</span>
        </section>
    )
}