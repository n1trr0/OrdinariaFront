import { useEffect, useState } from "preact/hooks";
import CharCard from "../islands/CharCard.tsx";
import { Char } from "../types.ts";

type data = {
    chars: Char[]
    favs: string[]
}

export default function CharListFavs({chars, favs}:data) {
    const [characters, setCharacters] = useState<Char[]>(chars)

    useEffect(()=>{
        const filtered = chars.filter(e => favs.includes(e.id))
        setCharacters(filtered)
    },[])

    return(
        <div class='grid'>
            {characters.map((e:Char)=>(<CharCard char={e} favs="si" />))}
        </div>
    )
}