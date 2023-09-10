import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/meme.png"  
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Meme Forge</h4>
        </header>
    )
}