import trollFace from "C:/Users/SC/my-project/src/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}