import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "add top text",
        bottomText: "add bottom text",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])
     
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function Getmeme (){
      const randomnum =  Math.floor(Math.random() * allMemes.length )
      setMeme(prev=>({...prev, imageUrl:allMemes[randomnum].url }))
    }
    
    function handleChange(event) {
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="add top text"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="add bottom text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={Getmeme} >Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}